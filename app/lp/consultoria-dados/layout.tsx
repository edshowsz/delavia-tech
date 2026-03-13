"use client";

import { StaticContentProvider, ContentType } from "@/lib/ContentContext";
import { PT_CONTENT } from "@/lib/content-data";

export default function DataEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StaticContentProvider content={PT_CONTENT as ContentType}>
      {children}
    </StaticContentProvider>
  );
}
