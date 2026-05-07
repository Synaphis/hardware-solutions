import { Metadata } from 'next';
import IndustriesContent from './IndustriesContent';

export const metadata: Metadata = {
  title: "Industry Solutions | Fintech, Data Centers & Enterprise",
  description: "Specialized IT infrastructure solutions for fintech, hyperscale data centers, and global enterprises. Low-latency networking and high-compute configurations.",
  keywords: ["Fintech Hardware", "HFT Infrastructure", "Data Center Servers", "Enterprise IT", "Blade Systems"],
  alternates: {
    canonical: "https://aorixis.com/industries",
  },
};

export default function IndustriesPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://aorixis.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Industries',
        item: 'https://aorixis.com/industries',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <IndustriesContent />
    </>
  );
}

