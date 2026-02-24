"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

import { SITE_CONTENT } from "@/lib/content";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { contactModal } = SITE_CONTENT;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 text-white font-sans">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(255,107,0,0.1)] overflow-hidden flex flex-col animate-fade-in-up h-[85vh] max-h-[800px]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#111] z-10">
           <h3 className="text-lg font-space font-bold text-white px-2">{contactModal.title}</h3>
           <button 
             onClick={onClose}
             className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
           >
             <X size={20} />
           </button>
        </div>

        {/* Decorative Top Line */}
        <div className="absolute top-[60px] inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />

        <div className="flex-1 w-full bg-[#111] overflow-hidden relative">
           <iframe 
            src={contactModal.formUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            title={contactModal.title}
           />
        </div>
      </div>
    </div>
  );
}
