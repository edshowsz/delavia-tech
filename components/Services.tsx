"use client";

import { useContent } from "@/lib/ContentContext";

export default function Services() {
  const { services } = useContent();

  return (
    <section id="method" aria-labelledby="method-title" className="border-y border-white/10 bg-[#0b0b0b] px-6 py-20 md:py-24">
      <div className="site-container">
        <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-12">
          <h2 id="method-title" className="font-space text-3xl font-medium tracking-tight md:text-4xl">{services.title}</h2>
          <p className="max-w-md text-base leading-relaxed text-zinc-400">{services.description}</p>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service, index) => (
            <li key={service.id} className="rounded-xl border border-white/10 bg-[#111111] p-6 md:p-7">
              <span className="font-space text-sm tabular-nums text-primary" aria-hidden="true">0{index + 1}</span>
              <h3 className="mb-3 mt-7 font-space text-xl font-medium">{service.title}</h3>
              <p className="text-sm leading-7 text-zinc-300">{service.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
