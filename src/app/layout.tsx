import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://aorixis.com'),
  title: {
    default: "Aorixis | Enterprise IT Hardware Solutions",
    template: "%s | Aorixis"
  },
  description: "Global B2B supplier of refurbished enterprise servers, storage, networking, and data center infrastructure. Configure-to-Order (CTO) specialist.",
  keywords: ["Enterprise Servers", "Refurbished Hardware", "Data Center Infrastructure", "CTO Build", "ITAD Services", "HPE", "Dell", "Cisco"],
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
    title: "Aorixis | Enterprise IT Hardware Solutions",
    description: "Enterprise-grade servers, storage, and networking. Custom configurations and global logistics.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aorixis Enterprise IT Hardware",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aorixis | Enterprise IT Hardware Solutions",
    description: "Enterprise-grade servers, storage, and networking. Custom configurations and global logistics.",
    images: ["/og-image.png"],
    creator: "@aorixis",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/site.webmanifest',
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
        <main style={{ marginTop: 'var(--nav-height)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
