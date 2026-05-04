'use client';
import { motion } from 'framer-motion';
import { Settings, Cpu, Database, Zap, MemoryStick } from 'lucide-react';
import styles from './CTOFeature.module.css';

export default function CTOFeature() {
  const options = [
    { label: "Processor", value: "Dual Intel Xeon Platinum", color: "var(--color-blue)", icon: <Cpu size={20} /> },
    { label: "Memory", value: "1.5TB DDR4 2933MHz", color: "var(--color-purple)", icon: <MemoryStick size={20} /> },
    { label: "Storage", value: "24x 3.84TB SAS SSD", color: "var(--color-orange)", icon: <Database size={20} /> },
    { label: "Power", value: "Dual 1600W Titanium", color: "var(--color-yellow)", icon: <Zap size={20} /> },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>

          <div className={styles.content}>
            <h2 className="sectionTitle">Configure-to-Order <br /><span style={{ color: 'var(--color-purple)' }}>(CTO) Build Service.</span></h2>
            <p className="sectionSubtitle">
              We don&apos;t just ship boxes. Our lab engineers custom-build every server and storage array to your exact technical specifications. Rigorously stress-tested and firmware-updated before deployment.
            </p>

            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNum}>01</div>
                <div>
                  <h4>Select Base Chassis</h4>
                  <p>Dell, HPE, or Cisco rackmount/blade units.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>02</div>
                <div>
                  <h4>Specify Components</h4>
                  <p>CPU, RAM, Storage, and NIC configurations.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>03</div>
                <div>
                  <h4>Tested & Dispatched</h4>
                  <p>Full diagnostic logs included with every shipment.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.visualColumn}>
            <div className={styles.configCard}>
              <div className={styles.configHeader}>
                <Settings size={20} />
                <span>Build Configurator</span>
              </div>

              <div className={styles.optionsGrid}>
                {options.map((opt, idx) => (
                  <motion.div
                    key={idx}
                    className={styles.optionItem}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className={styles.optIcon} style={{ color: opt.color }}>{opt.icon}</div>
                    <div className={styles.optTexts}>
                      <span className={styles.optLabel}>{opt.label}</span>
                      <span className={styles.optVal}>{opt.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className={styles.configFooter}>
                <div className={styles.totalRow}>
                  <span>Estimated Build Time:</span>
                  <strong>24-48 Hours</strong>
                </div>
                <a href="#cto" className={styles.buildBtn}>Start My Build</a>
              </div>
            </div>

            {/* Background 3D blobs */}
            <div className={styles.blob + ' ' + styles.blobBlue} />
            <div className={styles.blob + ' ' + styles.blobPurple} />
          </div>

        </div>
      </div>
    </section>
  );
}
