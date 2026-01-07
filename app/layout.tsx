import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coulsycode.com"),
  title: {
    default: "Coulsy Code — Web Development & Local SEO in York",
    template: "%s | Coulsy Code",
  },
  description:
    "Small, senior-led team building websites, web apps, and SEO-led marketing systems that generate enquiries. Based in York, serving Yorkshire and beyond.",
  keywords: [
    "web development york",
    "website design york",
    "local SEO york",
    "local SEO yorkshire",
    "web applications",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
  ],
  openGraph: {
    type: "website",
    url: "https://coulsycode.com",
    siteName: "Coulsy Code",
    locale: "en_GB",
    title: "Coulsy Code — Web Development & Local SEO in York",
    description:
      "Small, senior-led team building websites, web apps, and SEO-led marketing systems that generate enquiries. Based in York, serving Yorkshire and beyond.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coulsy Code — Web Development & Local SEO in York",
    description:
      "Small, senior-led team building websites, web apps, and SEO-led marketing systems that generate enquiries. Based in York, serving Yorkshire and beyond.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={plusJakartaSans.variable}>
      <body className="antialiased bg-white text-gray-900 font-sans">
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
