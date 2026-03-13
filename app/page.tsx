"use client";

import Link from "next/link";
import { ArrowRight, Database, ShoppingCart, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-primary selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-space font-bold text-xl">
            DELAVIA<span className="text-primary">.TECH</span>
          </div>
          <Link 
            href="https://www.linkedin.com/company/delavia-tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-3xl">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            Consultoria de Tecnologia
          </p>
          <h1 className="font-space text-4xl md:text-6xl font-bold leading-tight mb-6">
            Transformamos operações em{" "}
            <span className="text-primary">sistemas inteligentes</span>
          </h1>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            Ajudamos empresas a estruturar dados, automatizar processos e integrar ferramentas. 
            Menos retrabalho, mais resultado.
          </p>
        </div>

        {/* Cards de Oferta */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full mt-4">
          {/* Card Data Engineering */}
          <Link 
            href="/lp/consultoria-dados"
            className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Database className="text-primary" size={28} />
            </div>
            
            <h2 className="text-xl font-bold text-white mb-3">
              Consultoria de Dados
            </h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Engenharia de dados, modelagem de processos e análise para decisões estratégicas.
            </p>
            
            <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
              Conhecer soluções
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card E-commerce */}
          <Link 
            href="/lp/ecomm"
            className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <ShoppingCart className="text-primary" size={28} />
            </div>
            
            <h2 className="text-xl font-bold text-white mb-3">
              Automação para E-commerce
            </h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Para lojas online que querem organizar clientes, automatizar processos e conectar suas ferramentas.
            </p>
            
            <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
              Conhecer soluções
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="font-space font-bold text-white">
            DELAVIA<span className="text-primary">.TECH</span>
          </div>
          <div>© Todos os direitos reservados.</div>
        </div>
      </footer>
    </main>
  );
}
