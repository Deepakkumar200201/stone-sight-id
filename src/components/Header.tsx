
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-primary to-accent p-1 text-white">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-6 w-6"
            >
              <path d="m7.5 8 2 2a4.95 4.95 0 0 1 7 7 4.95 4.95 0 0 1-7 0 4.95 4.95 0 0 1 0-7l-2-2Z"></path>
              <path d="m16 3-2 2a4.95 4.95 0 0 0-7 7 4.95 4.95 0 0 0 7 0 4.95 4.95 0 0 0 0-7l2-2Z"></path>
            </svg>
          </div>
          <span className="text-xl font-bold font-display">RockID</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition">Home</Link>
          <Link to="/identify" className="text-sm font-medium hover:text-primary transition">Identify</Link>
          <Link to="/database" className="text-sm font-medium hover:text-primary transition">Rock Database</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition">About</Link>
          <Button asChild variant="default" className="ml-2">
            <Link to="/identify">Upload Rock</Link>
          </Button>
        </nav>
        
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium hover:text-primary transition">Home</Link>
                <Link to="/identify" className="text-lg font-medium hover:text-primary transition">Identify</Link>
                <Link to="/database" className="text-lg font-medium hover:text-primary transition">Rock Database</Link>
                <Link to="/about" className="text-lg font-medium hover:text-primary transition">About</Link>
                <Button asChild variant="default" className="mt-4">
                  <Link to="/identify">Upload Rock</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
