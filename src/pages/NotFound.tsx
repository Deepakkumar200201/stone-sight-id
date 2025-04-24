
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
          404
        </div>
        <h1 className="text-4xl font-bold mb-4 font-display">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Button asChild size="lg">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
