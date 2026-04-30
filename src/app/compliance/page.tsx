import { Metadata } from 'next';
import ComplianceContent from './ComplianceContent';

export const metadata: Metadata = {
  title: "Quality Control & Compliance Standards",
  description: "Rigorously tested enterprise hardware meeting global compliance standards. From NIST 800-88 data destruction to multi-tier diagnostic stress testing.",
  keywords: ["Compliance", "Quality Assurance", "Hardware Testing", "NIST 800-88", "ISO Certified"],
};

export default function CompliancePage() {
  return <ComplianceContent />;
}
