import React from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Navbar = () => {
  return (
    <nav className="w-full bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Logo - visible on all screens */}
            <div className="text-lg font-bold">
              <a href="/">MyApp</a>
            </div>
            
            {/* Navigation links - only visible on md+ screens */}
            <div className="hidden md:flex items-center space-x-4 ml-10">
              <a href="/" className="px-3 py-2">Home</a>
              <a href="/about" className="px-3 py-2">About</a>
              <a href="/contact" className="px-3 py-2">Contact</a>
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Mode toggle - visible on all screens */}
            <ModeToggle />
            {/* Sidebar trigger - only visible on small screens */}
            <div className="block md:hidden">
              <SidebarTrigger />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;