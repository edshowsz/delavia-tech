import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

 interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-20 pb-10">
      <div id="contact" className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-gradient-to-r from-primary/20 to-transparent p-12 rounded-3xl border border-primary/20 relative overflow-hidden text-center md:text-left">
           <div className="absolute right-0 top-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10" />
           
           <div className="md:flex justify-between items-center gap-8">
             <div>
               <h2 className="text-3xl font-bold text-white mb-4">Pronto para o futuro?</h2>
               <p className="text-gray-300 max-w-xl">Agende uma conversa de 15 minutos e descubra como podemos automatizar sua operação.</p>
             </div>
             <button 
              onClick={onContactClick}
              className="mt-8 md:mt-0 inline-flex whitespace-nowrap items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
             >
               Fale Conosco
               <ArrowUpRight />
             </button>
           </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
        <div className="font-space font-bold text-white">
          DELAVIA<span className="text-primary">.TECH</span>
        </div>
        
        <div>
          &copy; {new Date().getFullYear()} Delavia Tech. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
