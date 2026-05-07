import { Metadata } from 'next';
import SustainabilityContent from './SustainabilityContent';

export const metadata: Metadata = {
  title: "Sustainability & Circular Economy Commitment",
  description: "Reducing e-waste through the refurbishment and lifecycle extension of enterprise hardware. Our commitment to the circular economy and sustainable IT infrastructure.",
  keywords: ["Sustainability", "Circular Economy", "E-waste Reduction", "Green IT", "Refurbished Tech"],
  alternates: {
    canonical: "https://aorixis.com/sustainability",
  },
};

export default function SustainabilityPage() {
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
        name: 'Sustainability',
        item: 'https://aorixis.com/sustainability',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SustainabilityContent />
    </>
  );
}

