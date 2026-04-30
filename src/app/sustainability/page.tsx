import { Metadata } from 'next';
import SustainabilityContent from './SustainabilityContent';

export const metadata: Metadata = {
  title: "Sustainability & Circular Economy Commitment",
  description: "Reducing e-waste through the refurbishment and lifecycle extension of enterprise hardware. Our commitment to the circular economy and sustainable IT infrastructure.",
  keywords: ["Sustainability", "Circular Economy", "E-waste Reduction", "Green IT", "Refurbished Tech"],
};

export default function SustainabilityPage() {
  return <SustainabilityContent />;
}
