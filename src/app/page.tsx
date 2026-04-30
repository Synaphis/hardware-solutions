import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import ProductCategories from '@/components/ProductCategories';
import TrustSignals from '@/components/TrustSignals';
import CTOFeature from '@/components/CTOFeature';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import EnquiryForm from '@/components/EnquiryForm';

export default function Home() {
  return (
    <>
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
