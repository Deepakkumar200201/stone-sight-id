
import { RockData } from '@/components/RockResult';

interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
  promptFeedback: {
    blockReason?: string;
  };
}

// Create a structured prompt for the Gemini API
export const createRockPrompt = (imageBase64: string): string => {
  return `
You are a geology expert specialized in rock and mineral identification. I'm showing you an image of a rock or mineral specimen. 
Please analyze it and provide a detailed identification in JSON format with the following structure:

{
  "name": "Common name of the rock/mineral",
  "scientificName": "Scientific name if applicable",
  "type": "Igneous, Metamorphic, Sedimentary, or Mineral",
  "category": "More specific classification",
  "confidence": "Confidence level as a number between 1-100",
  "composition": ["List of main minerals/components"],
  "hardness": "Mohs scale hardness (1-10)",
  "luster": "Description of luster (metallic, vitreous, earthy, etc.)",
  "colorRange": ["List of typical colors"],
  "streakColor": "Color when streaked against porcelain",
  "cleavage": "Description of cleavage/fracture pattern",
  "crystalStructure": "Description of crystal structure if applicable",
  "description": "Detailed paragraph about this rock/mineral",
  "formation": "How this rock/mineral typically forms",
  "commonLocations": ["Notable regions where this rock/mineral is found"],
  "collectingValue": "Description of value to collectors",
  "funFacts": ["3-5 interesting facts about this rock/mineral"],
  "uses": ["Common uses of this rock/mineral"]
}

Respond ONLY with valid JSON that can be parsed. Do not include any additional text, explanations, or formatting.
  `;
};

export const identifyRockWithGemini = async (imageFile: File): Promise<RockData> => {
  try {
    // Get the API key from localStorage
    const apiKey = localStorage.getItem('gemini_api_key');
    if (!apiKey) {
      throw new Error("Gemini API key not found");
    }

    // Convert the image file to base64
    const base64Image = await fileToBase64(imageFile);
    if (!base64Image) throw new Error("Failed to convert image to base64");

    // Prepare the API request
    const apiEndpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent";
    
    const payload = {
      contents: [
        {
          parts: [
            { text: createRockPrompt(base64Image) },
            { inline_data: { mime_type: imageFile.type, data: base64Image.split(',')[1] } }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.2,
        topK: 32,
        topP: 1,
        maxOutputTokens: 4096,
      }
    };

    // Send the request to Gemini API
    const response = await fetch(`${apiEndpoint}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API Error:', errorText);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json() as GeminiResponse;

    // Check if the response was blocked
    if (data.promptFeedback?.blockReason) {
      throw new Error(`Content blocked: ${data.promptFeedback.blockReason}`);
    }

    // Extract the text response
    const textResponse = data.candidates[0]?.content?.parts[0]?.text;
    if (!textResponse) {
      throw new Error("No text response from Gemini API");
    }

    // Parse the JSON response
    const rockData = JSON.parse(textResponse) as RockData;
    
    // Add fallbacks for any missing fields
    return {
      type: rockData.type || 'Unknown',
      name: rockData.name || 'Unknown Rock',
      scientificName: rockData.scientificName,
      confidence: rockData.confidence || 50,
      composition: rockData.composition || ['Unknown'],
      description: rockData.description || 'No description available',
      commonLocations: rockData.commonLocations || ['Unknown'],
      category: rockData.category || 'Unknown',
      hardness: rockData.hardness,
      luster: rockData.luster,
      colorRange: rockData.colorRange,
      streakColor: rockData.streakColor,
      cleavage: rockData.cleavage,
      crystalStructure: rockData.crystalStructure,
      uses: rockData.uses,
      formation: rockData.formation,
      collectingValue: rockData.collectingValue,
      funFacts: rockData.funFacts,
      imageUrl: base64Image // Use the uploaded image as the image URL
    };
  } catch (error) {
    console.error("Error identifying rock:", error);
    throw error;
  }
};

// Helper function to convert a file to base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};
