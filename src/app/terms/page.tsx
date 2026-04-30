import { Metadata } from 'next';
import TermsContent from './TermsContent';

export const metadata: Metadata = {
  title: "Terms of Service & SLAs",
  description: "Standard B2B hardware procurement and service level agreements for Aorixis enterprise solutions.",
  robots: {
    index: false, // Usually good to keep legal pages out of main search results if desired, or set to true. 
    follow: true,
  }
};

export default function TermsPage() {
  return <TermsContent />;
}
