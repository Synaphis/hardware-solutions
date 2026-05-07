import { Metadata } from 'next';
import LogisticsContent from './LogisticsContent';

export const metadata: Metadata = {
  title: "Global Logistics & Infrastructure Freight",
  description: "Secure, tracked, and insured freight for mission-critical enterprise hardware. We ship to over 100 countries with dedicated handling for sensitive IT equipment.",
  keywords: ["Global Shipping", "IT Logistics", "Secure Freight", "Data Center Moving", "Hardware Shipping"],
  alternates: {
    canonical: "https://aorixis.com/logistics",
  },
  openGraph: {
    title: "Global IT Infrastructure Logistics | Aorixis",
    description: "Door-to-door tracking and secure delivery for enterprise hardware worldwide.",
  }
};

export default function LogisticsPage() {
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
        name: 'Logistics',
        item: 'https://aorixis.com/logistics',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <LogisticsContent />
    </>
  );
}

