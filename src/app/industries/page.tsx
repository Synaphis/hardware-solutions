import { Metadata } from 'next';
import IndustriesContent from './IndustriesContent';

export const metadata: Metadata = {
  title: "Industry Solutions | Fintech, Data Centers & Enterprise",
  description: "Specialized IT infrastructure solutions for fintech, hyperscale data centers, and global enterprises. Low-latency networking and high-compute configurations.",
  keywords: ["Fintech Hardware", "HFT Infrastructure", "Data Center Servers", "Enterprise IT", "Blade Systems"],
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}
