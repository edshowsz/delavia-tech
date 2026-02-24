"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { useContent } from "@/lib/ContentContext";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const { navbar } = useContent();
  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-space font-bold text-2xl tracking-tighter text-white">
          {navbar.logo.text}<span className="text-primary">{navbar.logo.highlight}</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <Link href="#solutions" className="hover:text-primary transition-colors">{navbar.links.solutions}</Link>
          <Link href="#method" className="hover:text-primary transition-colors">{navbar.links.method}</Link>
          <button onClick={onContactClick} className="hover:text-primary transition-colors">{navbar.links.contact}</button>
        </div>

      </div>
    </nav>
  );
}
