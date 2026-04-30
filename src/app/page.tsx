import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import ProductCategories from '@/components/ProductCategories';
import TrustSignals from '@/components/TrustSignals';
import CTOFeature from '@/components/CTOFeature';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import EnquiryForm from '@/components/EnquiryForm';

export default function Home() {
  const jsonLd = {
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
  };

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
