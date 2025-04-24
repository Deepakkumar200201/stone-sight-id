
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageUploader from '@/components/ImageUploader';
import RockResult, { RockData } from '@/components/RockResult';
import ApiKeyInput from '@/components/ApiKeyInput';
import { useToast } from '@/hooks/use-toast';
import { identifyRockWithGemini } from '@/services/geminiService';

const Identify: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<RockData | null>(null);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleApiKeySubmit = (key: string) => {
    setApiKey(key);
  };

  const identifyRock = async (file: File) => {
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your Gemini API key to identify rocks",
        variant: "destructive",
      });
      return;
    }

    setAnalyzing(true);
    setError(null);
    
    try {
      // Update the identifyRockWithGemini function to use the apiKey
      const rockData = await identifyRockWithGemini(file);
      setResult(rockData);
      
      toast({
        title: "Rock Identified!",
        description: `Your rock appears to be ${rockData.name} with ${rockData.confidence}% confidence.`
      });
    } catch (err) {
      console.error("Error identifying rock:", err);
      setError(typeof err === 'object' && err !== null && 'message' in err 
        ? (err as Error).message 
        : "An unexpected error occurred while identifying your rock.");
      
      toast({
        title: "Identification Failed",
        description: "There was an error identifying your rock. Please try again.",
        variant: "destructive",
      });
    } finally {
      setAnalyzing(false);
    }
  };

  const handleImageSelect = (file: File) => {
    setFile(file);
    identifyRock(file);
  };

  const handleReset = () => {
    setFile(null);
    setResult(null);
    setError(null);
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

          {!apiKey && (
            <div className="mb-12">
              <ApiKeyInput onKeySubmit={handleApiKeySubmit} />
            </div>
          )}

          {apiKey && !result && (
            <div className="max-w-xl mx-auto">
              <ImageUploader onImageSelect={handleImageSelect} analyzing={analyzing} />
              
              {error && (
                <div className="mt-4 p-4 border border-destructive/50 bg-destructive/10 rounded-md text-destructive text-sm">
                  <p className="font-medium">Error: {error}</p>
                  <p className="mt-1">Please try again with a different image or check your API key.</p>
                </div>
              )}
            </div>
          )}
          
          {result && (
            <RockResult data={result} onReset={handleReset} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Identify;
