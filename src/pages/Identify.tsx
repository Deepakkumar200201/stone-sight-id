
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageUploader from '@/components/ImageUploader';
import RockResult, { RockData } from '@/components/RockResult';
import { useToast } from '@/components/ui/use-toast';

const Identify: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<RockData | null>(null);
  const { toast } = useToast();

  // This is a mock function that would be replaced with actual AI identification logic
  const identifyRock = async (file: File) => {
    // Simulate API call delay
    setAnalyzing(true);
    
    // Mock identification result after a delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock result data
    const mockResult: RockData = {
      type: "Igneous",
      name: "Granite",
      confidence: 92,
      composition: ["Quartz", "Feldspar", "Mica", "Amphibole"],
      description: "Granite is a light-colored, coarse-grained igneous rock that forms from the slow crystallization of magma below the Earth's surface. It is mainly composed of quartz, alkali feldspar, and plagioclase, with minor amounts of mica, amphiboles, and other minerals.",
      commonLocations: ["North America", "Europe", "Australia"],
      category: "Igneous Rock",
      hardness: 7,
      uses: [
        "Building and construction (countertops, floor tiles)",
        "Monuments and sculptures",
        "Road construction (crushed stone)"
      ],
      formation: "Formed by the slow cooling and solidification of magma beneath the Earth's surface, allowing large crystals to form",
      imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
    };
    
    setAnalyzing(false);
    setResult(mockResult);
    
    toast({
      title: "Rock Identified!",
      description: `Your rock appears to be ${mockResult.name} with ${mockResult.confidence}% confidence.`
    });
  };

  const handleImageSelect = (file: File) => {
    setFile(file);
    identifyRock(file);
  };

  const handleReset = () => {
    setFile(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight font-display sm:text-4xl md:text-5xl">
              Identify Your Rock
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Upload a clear photo of your rock or mineral for instant identification
            </p>
          </div>

          {!result ? (
            <div className="max-w-xl mx-auto">
              <ImageUploader onImageSelect={handleImageSelect} />
            </div>
          ) : (
            <RockResult data={result} onReset={handleReset} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Identify;
