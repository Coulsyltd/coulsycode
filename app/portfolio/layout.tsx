import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A few recent builds — ranking-focused service sites and a multi-user platform — with the thinking behind what we shipped.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


