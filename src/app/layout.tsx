import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aorixis.com"),
  title: {
    default: "Aorixis | Enterprise IT Hardware Solutions",
    template: "%s | Aorixis",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mainContent">{children}</main>
        <Footer />
      </body>
    </html>
  );
}