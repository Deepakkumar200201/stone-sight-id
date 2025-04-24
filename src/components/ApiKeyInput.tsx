
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface ApiKeyInputProps {
  onKeySubmit: (key: string) => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onKeySubmit }) => {
  const [apiKey, setApiKey] = useState<string>('');
  const [savedKey, setSavedKey] = useState<string | null>(null);
  const { toast } = useToast();

  // Load the API key from localStorage on component mount
  useEffect(() => {
    const storedKey = localStorage.getItem('gemini_api_key');
    if (storedKey) {
      setSavedKey(storedKey);
      onKeySubmit(storedKey);
    }
  }, [onKeySubmit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid API key",
        variant: "destructive",
      });
      return;
    }

    // Save the API key to localStorage
    localStorage.setItem('gemini_api_key', apiKey);
    setSavedKey(apiKey);
    onKeySubmit(apiKey);
    
    toast({
      title: "Success",
      description: "Gemini API key has been saved",
    });
  };

  const handleClear = () => {
    localStorage.removeItem('gemini_api_key');
    setApiKey('');
    setSavedKey(null);
    
    toast({
      title: "API Key Removed",
      description: "Your Gemini API key has been removed",
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Gemini API Key</CardTitle>
        <CardDescription>
          Enter your Google Gemini API key to enable rock identification
        </CardDescription>
      </CardHeader>
      <CardContent>
        {savedKey ? (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Your API key is saved and ready to use
            </p>
            <div className="flex items-center gap-2">
              <Input 
                type="password" 
                value="••••••••••••••••••••••" 
                disabled 
                className="font-mono"
              />
              <Button variant="destructive" onClick={handleClear} size="sm">
                Clear
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Enter your Gemini API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="font-mono"
              />
              <p className="text-xs text-muted-foreground">
                Your API key is stored locally on your device and never sent to our servers.
                Get your API key from <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google AI Studio</a>.
              </p>
            </div>
            <Button type="submit" className="w-full">Save API Key</Button>
          </form>
        )}
      </CardContent>
      {savedKey && (
        <CardFooter>
          <p className="text-xs text-muted-foreground">
            Note: Your API key is stored only in your browser. You'll need to re-enter it if you clear your browser data.
          </p>
        </CardFooter>
      )}
    </Card>
  );
};

export default ApiKeyInput;
