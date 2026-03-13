"use client";

import { Linkedin } from "lucide-react";

export default function EcommFooter() {
  return (
    <footer className="py-10 bg-[#030303] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="font-space text-lg font-bold text-white">DELAVIA</span>
            <span className="font-space text-lg font-bold text-primary">.TECH</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Delavia Tech. Todos os direitos reservados.
          </p>

          {/* Social */}
          <a 
            href="https://www.linkedin.com/company/delavia-tech/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
