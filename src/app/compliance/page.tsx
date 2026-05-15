import { Metadata } from 'next';
import ComplianceContent from './ComplianceContent';

export const metadata: Metadata = {
  title: "Quality Control & Compliance Standards",
  description: "Rigorously tested enterprise hardware meeting global compliance standards. From NIST 800-88 data destruction to multi-tier diagnostic stress testing.",
  keywords: ["Compliance", "Quality Assurance", "Hardware Testing", "NIST 800-88", "ISO Certified"],
  alternates: {
    canonical: "/compliance",
  },
  openGraph: {
    title: "Quality Control & Compliance Standards | Aorixis",
    description: "Rigorously tested enterprise hardware meeting global compliance standards.",
    url: "https://aorixis.com/compliance",
  },
};

export default function CompliancePage() {
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
        name: 'Compliance',
        item: 'https://aorixis.com/compliance',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ComplianceContent />
    </>
  );
}

