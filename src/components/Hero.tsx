
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Upload, Database, Info, Search, BookOpen, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-background pt-8 md:pt-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-display">
              Identify Any <span className="gradient-text">Rock or Mineral</span> in Seconds
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[600px]">
              Upload a photo of any rock or mineral and get instant identification using our advanced AI technology. Perfect for geologists, students, collectors, and enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/identify">
                  Identify Your Rock <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/search">
                  <Search className="h-4 w-4 mr-2" /> Search Rock Database
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <div className="flex flex-row items-start gap-2 bg-card p-3 rounded-lg border">
                <Upload className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Multi-View Analysis</h3>
                  <p className="text-sm text-muted-foreground">Upload multiple angles</p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-2 bg-card p-3 rounded-lg border">
                <Search className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Search Filters</h3>
                  <p className="text-sm text-muted-foreground">Find by properties</p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-2 bg-card p-3 rounded-lg border">
                <Database className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Collection Management</h3>
                  <p className="text-sm text-muted-foreground">Save your discoveries</p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-2 bg-card p-3 rounded-lg border">
                <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Detailed Analysis</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive properties</p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-2 bg-card p-3 rounded-lg border">
                <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Educational Content</h3>
                  <p className="text-sm text-muted-foreground">Learn about geology</p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-2 bg-card p-3 rounded-lg border">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Location-Based</h3>
                  <p className="text-sm text-muted-foreground">Region-specific insights</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="absolute w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="relative grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                <div className="overflow-hidden rounded-lg animate-float shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                    alt="Stone formation"
                    className="h-auto w-full object-cover aspect-[3/4]"
                  />
                </div>
                <div className="overflow-hidden rounded-lg animate-float delay-700 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
                    alt="Colorful mineral"
                    className="h-auto w-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 pt-10">
                <div className="overflow-hidden rounded-lg animate-float delay-300 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1426604966848-d7adac402bff"
                    alt="Mountain rocky formation"
                    className="h-auto w-full object-cover aspect-[4/3]"
                  />
                </div>
                <div className="overflow-hidden rounded-lg animate-float delay-500 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
                    alt="Close-up of mineral"
                    className="h-auto w-full object-cover aspect-[3/4]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
