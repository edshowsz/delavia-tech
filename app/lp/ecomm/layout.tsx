import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Organizado | DELAVIA.TECH",
  description: "Organizamos seus clientes e automatizamos o trabalho repetitivo do seu e-commerce. CRM, automações e integrações.",
};

export default function EcommLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
