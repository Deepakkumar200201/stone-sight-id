
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 z-0"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight font-display mb-4">
            Ready to Identify Your Rock?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take a photo and get an instant identification of any rock or mineral.
            Our AI technology makes geology accessible to everyone.
          </p>
          <Button size="lg" className="gap-2" asChild>
            <Link to="/identify">
              Upload Your Rock <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-0"></div>
    </section>
  );
};

export default CallToAction;
