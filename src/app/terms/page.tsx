import { Metadata } from 'next';
import TermsContent from './TermsContent';

export const metadata: Metadata = {
  title: "Terms of Service & SLAs",
  description: "Standard B2B hardware procurement and service level agreements for Aorixis enterprise solutions.",
  alternates: {
    canonical: "https://aorixis.com/terms",
  },
  robots: {
    index: false,
    follow: true,
  }
};


export default function TermsPage() {
  return <TermsContent />;
}
