import { Metadata } from 'next';
import SuppliersContent from './SuppliersContent';

export const metadata: Metadata = {
  title: "Asset Disposition & Procurement | Sell Your IT Hardware",
  description: "Get market-leading valuations for your decommissioned IT hardware. Secure data destruction, global logistics, and fair market value for your enterprise assets.",
  keywords: ["ITAD", "IT Asset Disposition", "Sell Servers", "Data Center Liquidation", "Hardware Buyback"],
  openGraph: {
    title: "Sell Your Enterprise IT Assets | Aorixis Procurement",
    description: "Secure and sustainable retirement for your enterprise hardware. NIST-compliant data destruction and fair valuations.",
  }
};

export default function SuppliersPage() {
  return <SuppliersContent />;
}
