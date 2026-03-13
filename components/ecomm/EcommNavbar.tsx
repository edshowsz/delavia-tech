"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

interface EcommNavbarProps {
  contactUrl: string;
}

export default function EcommNavbar({ contactUrl }: EcommNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="/lp/ecomm" className="flex items-center gap-1">
            <span className="font-space text-xl font-bold text-white">DELAVIA</span>
            <span className="font-space text-xl font-bold text-primary">.TECH</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors text-sm">
              Como funciona
            </a>
            <a 
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg font-medium transition-all text-sm"
            >
              Falar pelo WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <div className="flex flex-col gap-4">
              <a 
                href="#como-funciona" 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Como funciona
              </a>
              <a 
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-hover text-white px-5 py-3 rounded-lg font-medium transition-all text-center"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
