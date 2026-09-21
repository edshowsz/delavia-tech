"use client";

import { ArrowUpRight } from "lucide-react";
import { useContent } from "@/lib/ContentContext";

export default function Footer({ contactUrl }: { contactUrl: string }) {
  const { cta, footer } = useContent();

  return (
    <footer className="px-6">
      <div className="site-container">
        <div id="contact" className="contact-panel mb-14 flex flex-col items-start justify-between gap-8 p-8 md:flex-row md:items-center md:p-12">
          <div className="relative">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">SEU PRÓXIMO PASSO</p>
            <h2 className="font-space text-3xl font-medium tracking-tight md:text-4xl">{cta.title}</h2>
            <p className="mt-4 max-w-lg leading-relaxed text-zinc-400">{cta.description}</p>
          </div>
          <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="contact-button relative shrink-0">
            {cta.button}<ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="flex flex-col gap-5 border-t border-white/10 py-8 text-xs leading-relaxed text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="font-space text-base font-bold uppercase text-white">{footer.company}</a>
          <p>{footer.copyright}</p>
          {footer.social?.linkedin && <a href={footer.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm transition-colors hover:text-white">LinkedIn<ArrowUpRight size={15} aria-hidden="true" /></a>}
        </div>
      </div>
    </footer>
  );
}
