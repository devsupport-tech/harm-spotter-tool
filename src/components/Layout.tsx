
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Clipboard, Home, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import Chatbot from './Chatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'Reports', path: '/reports', icon: <Clipboard className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/49442e97-76b6-414f-960b-97b694565a4f.png" 
                alt="My Estimate Team Logo" 
                className="h-12 object-contain"
              />
              <span className="ml-2 text-lg font-semibold">Damage Report</span>
            </div>
            <nav className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  )}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </Link>
              ))}
              <a 
                href="https://www.MyEstimateTeam.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="ml-2">Website</span>
              </a>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-white border-t py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} My Estimate Team. All rights reserved.</p>
        </div>
      </footer>
      
      <Chatbot />
    </div>
  );
};

export default Layout;
