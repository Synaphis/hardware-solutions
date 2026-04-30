import { Metadata } from 'next';
import LogisticsContent from './LogisticsContent';

export const metadata: Metadata = {
  title: "Global Logistics & Infrastructure Freight",
  description: "Secure, tracked, and insured freight for mission-critical enterprise hardware. We ship to over 100 countries with dedicated handling for sensitive IT equipment.",
  keywords: ["Global Shipping", "IT Logistics", "Secure Freight", "Data Center Moving", "Hardware Shipping"],
  openGraph: {
    title: "Global IT Infrastructure Logistics | Aorixis",
    description: "Door-to-door tracking and secure delivery for enterprise hardware worldwide.",
  }
};

export default function LogisticsPage() {
  return <LogisticsContent />;
}
