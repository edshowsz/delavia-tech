"use client";

import { useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useContent } from "@/lib/ContentContext";

export default function Navbar({ contactUrl }: { contactUrl: string }) {
  const { navbar, hero } = useContent();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const links = [
    { href: "#solucoes", label: navbar.links.solutions },
    { href: "#como-trabalhamos", label: navbar.links.method },
    { href: "#contato", label: navbar.links.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/95 backdrop-blur-md" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }}>
      <nav aria-label="Navegação principal" className="site-container px-6 xl:px-0">
        <div className="flex h-20 items-center justify-between gap-6">
          <a href="/" aria-label="Delavia Tech — início" className="font-space text-xl font-bold tracking-tight">
            {navbar.logo.text}<span className="text-primary">{navbar.logo.highlight}</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            {links.map((link) => <a key={link.href} href={link.href} className="py-3 transition-colors hover:text-white">{link.label}</a>)}
            <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/20 px-4 text-white transition-colors hover:border-primary">
              {hero.cta.primary}<ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <button ref={toggleRef} type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 md:hidden">
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        <div id="mobile-navigation" className={`${open ? "flex" : "hidden"} flex-col gap-1 border-t border-white/10 pb-5 pt-3 md:hidden`}>
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-zinc-300 hover:bg-white/5">{link.label}</a>)}
          <a href={contactUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="contact-button mt-3">{hero.cta.primary}<ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </nav>
    </header>
  );
}
