'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Trash2, FileCheck, Scale, History } from 'lucide-react';
import styles from './Compliance.module.css';

export default function ComplianceContent() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className="sectionTitle">Compliance & <span className={styles.accentText}>IT Asset Disposal.</span></h1>
          <p className="sectionSubtitle">
            Ensuring data security and environmental responsibility in the lifecycle of enterprise IT hardware. We provide a secure, certified exit strategy for your decommissioned assets.
          </p>
        </header>

        <div className={styles.grid}>
          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ShieldCheck size={40} color="var(--color-green)" />
            <h3>NIST 800-88 Compliant</h3>
            <p>Our data sanitization protocols strictly adhere to NIST 800-88 standards, providing either software-based multi-pass wipes or physical shredding of storage media.</p>
          </motion.div>

          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Lock size={40} color="var(--color-blue)" />
            <h3>Chain of Custody</h3>
            <p>From the moment equipment is de-racked to its final disposition, we maintain a secure, audited chain of custody with full documentation for your compliance records.</p>
          </motion.div>

          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Trash2 size={40} color="var(--color-red)" />
            <h3>Zero Landfill Policy</h3>
            <p>We prioritize refurbishment and parts recovery. Equipment that cannot be repurposed is processed through certified e-waste recyclers to ensure zero landfill impact.</p>
          </motion.div>
        </div>

        <section className={styles.certifications}>
          <div className={styles.certItem}>
            <FileCheck size={24} />
            <span>Certificate of Destruction Issued</span>
          </div>
          <div className={styles.certItem}>
            <Scale size={24} />
            <span>Environmental Liability Coverage</span>
          </div>
          <div className={styles.certItem}>
            <History size={24} />
            <span>Full Audit Trail & Reporting</span>
          </div>
        </section>
      </div>
    </div>
  );
}
