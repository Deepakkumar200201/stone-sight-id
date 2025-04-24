
import React from 'react';
import { CheckCircle, Info, Layers, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

export interface RockData {
  type: string;
  name: string;
  confidence: number;
  composition: string[];
  description: string;
  commonLocations: string[];
  category: string;
  hardness?: number;
  uses?: string[];
  formation?: string;
  imageUrl?: string;
}

interface RockResultProps {
  data: RockData;
  onReset: () => void;
}

const RockResult: React.FC<RockResultProps> = ({ data, onReset }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold font-display">Identification Complete</h2>
        <p className="text-muted-foreground">We've analyzed your rock with {data.confidence}% confidence</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Rock Information</CardTitle>
            <CardDescription>Basic details about your rock</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Name</p>
              <p className="text-xl font-medium">{data.name}</p>
            </div>
            
            <div>
              <p className="text-sm font-medium text-muted-foreground">Category</p>
              <p className="text-md">{data.category}</p>
            </div>
            
            <div>
              <p className="text-sm font-medium text-muted-foreground">Confidence</p>
              <Progress value={data.confidence} className="h-2 mt-2" />
              <p className="text-xs text-right mt-1">{data.confidence}%</p>
            </div>
            
            <Separator />
            
            {data.hardness && (
              <div>
                <p className="text-sm font-medium text-muted-foreground">Hardness (Mohs Scale)</p>
                <p className="text-md">{data.hardness} / 10</p>
              </div>
            )}
            
            <div>
              <p className="text-sm font-medium text-muted-foreground">Composition</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {data.composition.map((item, i) => (
                  <div key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">About {data.name}</CardTitle>
            <CardDescription>Detailed information about this rock type</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground mb-2">Description</p>
                <p className="text-sm">{data.description}</p>
              </div>
              
              {data.imageUrl && (
                <div className="flex-shrink-0 sm:w-1/3">
                  <img 
                    src={data.imageUrl} 
                    alt={data.name} 
                    className="w-full h-auto rounded-md object-cover aspect-square"
                  />
                </div>
              )}
            </div>
            
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Common Locations</p>
              <div className="flex flex-wrap gap-2">
                {data.commonLocations.map((location, i) => (
                  <div key={i} className="text-sm bg-accent/10 text-accent-foreground px-3 py-1 rounded-full">
                    {location}
                  </div>
                ))}
              </div>
            </div>
            
            {data.formation && (
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Formation</p>
                <div className="flex items-start gap-2">
                  <Layers className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <p className="text-sm">{data.formation}</p>
                </div>
              </div>
            )}
            
            {data.uses && data.uses.length > 0 && (
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Common Uses</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  {data.uses.map((use, i) => (
                    <li key={i}>{use}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="flex items-start gap-2 bg-muted/50 p-3 rounded-lg">
              <AlertCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                This identification is based on visual analysis only. For scientific certainty, 
                consult with a professional geologist.
              </p>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button onClick={onReset}>Identify Another Rock</Button>
            <Button variant="outline">
              <Info className="h-4 w-4 mr-2" />
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RockResult;
