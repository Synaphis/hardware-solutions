import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import ProductCategories from '@/components/ProductCategories';
import TrustSignals from '@/components/TrustSignals';
import CTOFeature from '@/components/CTOFeature';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: "Aorixis | Enterprise IT Hardware Authority | Certified Servers, Storage & Networking",
  description: "B2B supplier of certified Tier-1 IT infrastructure. Refurbished servers, storage, and networking with global shipping and technical support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://aorixis.com",
    type: "website",
  }
};

export default function Home() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Aorixis',
      url: 'https://aorixis.com',
      logo: 'https://aorixis.com/logo.png',
      description: 'Enterprise IT hardware solutions specialist, providing refurbished servers, storage, and networking globally.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-888-788-7812',
        contactType: 'sales',
        email: 'info@aorixis.com',
        availableLanguage: 'English',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Aorixis',
      url: 'https://aorixis.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://aorixis.com/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustSignals />
      <CTOFeature />
      <Brands />
      <ProductCategories />
      <Services />
      <WhyUs />
      <EnquiryForm />
    </>
  );
}
