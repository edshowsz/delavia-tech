import Link from "next/link";
import { MoveRight } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-space font-bold text-2xl tracking-tighter text-white">
          DELAVIA<span className="text-primary">.TECH</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <Link href="#solutions" className="hover:text-primary transition-colors">Soluções</Link>
          <Link href="#method" className="hover:text-primary transition-colors">Método</Link>
          <button onClick={onContactClick} className="hover:text-primary transition-colors">Contato</button>
        </div>

      </div>
    </nav>
  );
}
