import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aorixis.com"),
  title: {
    default: "Aorixis | Enterprise IT Hardware Authority | Certified Servers, Storage & Networking",
    template: "%s | Aorixis",
  },
  description: "Global B2B supplier of certified enterprise IT hardware. Specializing in refurbished servers, storage, and networking solutions for data centers and hyperscale infrastructure.",
  keywords: ["Enterprise IT Hardware", "Refurbished Servers", "Data Center Infrastructure", "Network Equipment", "ITAD Services", "Server Procurement", "Refurbished Storage"],
  authors: [{ name: "Aorixis" }],
  creator: "Aorixis",
  publisher: "Aorixis",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aorixis.com",
    siteName: "Aorixis",
    title: "Aorixis | Enterprise IT Hardware Authority",
    description: "Certified Tier-1 IT infrastructure solutions. Servers, Storage, and Networking for global data centers.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Aorixis Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aorixis | Enterprise IT Hardware Authority",
    description: "Certified Tier-1 IT infrastructure solutions for global data centers.",
    creator: "@aorixis",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        <main className="mainContent">{children}</main>
        <Footer />
      </body>
    </html>
  );
}