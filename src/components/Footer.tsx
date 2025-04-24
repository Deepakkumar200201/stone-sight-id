
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-8 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
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
                  className="h-5 w-5"
                >
                  <path d="m7.5 8 2 2a4.95 4.95 0 0 1 7 7 4.95 4.95 0 0 1-7 0 4.95 4.95 0 0 1 0-7l-2-2Z"></path>
                  <path d="m16 3-2 2a4.95 4.95 0 0 0-7 7 4.95 4.95 0 0 0 7 0 4.95 4.95 0 0 0 0-7l2-2Z"></path>
                </svg>
              </div>
              <span className="text-lg font-bold font-display">RockID</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              RockID helps you identify rocks and minerals using advanced AI technology.
              Perfect for geology enthusiasts, students, and collectors.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/identify" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Rock Identification
                </Link>
              </li>
              <li>
                <Link to="/database" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Rock Database
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition">
                  About the App
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@rockid.example" className="text-sm text-muted-foreground hover:text-foreground transition">
                  info@rockid.example
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} RockID. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
