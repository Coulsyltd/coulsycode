import type { Metadata } from "next";
import CapabilitiesClient from "./CapabilitiesClient";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "A plain-English look at what I can build — plus the tools behind it (without the jargon).",
  alternates: { canonical: "/capabilities" },
};

export default function CapabilitiesPage() {
  return <CapabilitiesClient />;
}


