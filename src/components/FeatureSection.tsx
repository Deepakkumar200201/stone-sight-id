
import React from 'react';
import { Camera, Search, Sparkles, Database, Map, BookOpen } from 'lucide-react';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight font-display mb-4">
            How RockID Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Our AI-powered platform makes rock identification simple, quick, and accurate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Camera className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Take a Photo</h3>
            <p className="text-muted-foreground">
              Use your device's camera or upload an existing photo of any rock or mineral you want to identify.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">AI Analysis</h3>
            <p className="text-muted-foreground">
              Our advanced AI analyzes the visual characteristics of the rock to determine its type and classification.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Instant Results</h3>
            <p className="text-muted-foreground">
              Get detailed identification results within seconds, including the rock type, composition, and key properties.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Extensive Database</h3>
            <p className="text-muted-foreground">
              Access our comprehensive database of rocks and minerals with information on hundreds of different types.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Map className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Geographic Context</h3>
            <p className="text-muted-foreground">
              Learn about where similar rocks are typically found and their geological significance around the world.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Educational Resources</h3>
            <p className="text-muted-foreground">
              Expand your knowledge with detailed information about each rock's formation, history, and properties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
