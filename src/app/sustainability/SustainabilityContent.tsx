'use client';
import { motion } from 'framer-motion';
import { Globe, Zap, RefreshCcw } from 'lucide-react';
import styles from './Sustainability.module.css';

export default function SustainabilityContent() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className="sectionTitle">Sustainability & <span className={styles.accentText}>Circular Economy.</span></h1>
          <p className="sectionSubtitle">
            Every refurbished unit is one less manufactured from scratch. We help organizations meet ESG goals by extending the lifecycle of enterprise IT infrastructure.
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.stats}>
            <div className={styles.statItem}>
              <h2 className={styles.statNum}>85%</h2>
              <p>Hardware Lifespan Extension</p>
            </div>
            <div className={styles.statItem}>
              <h2 className={styles.statNum}>100k+</h2>
              <p>Units Diverted from Landfills</p>
            </div>
            <div className={styles.statItem}>
              <h2 className={styles.statNum}>Zero</h2>
              <p>Illegal E-waste Exports</p>
            </div>
          </section>

          <div className={styles.grid}>
            <motion.div className={styles.card} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <RefreshCcw size={32} color="var(--color-green)" />
              <h3>Circular Procurement</h3>
              <p>By prioritizing refurbished hardware, we help companies reduce their Scope 3 carbon emissions and support a truly circular economy.</p>
            </motion.div>

            <motion.div className={styles.card} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
              <Globe size={32} color="var(--color-blue)" />
              <h3>E-waste Reduction</h3>
              <p>We provide a sustainable alternative to the linear &apos;take-make-dispose&apos; model, ensuring that every server component serves its full technical purpose.</p>
            </motion.div>

            <motion.div className={styles.card} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <Zap size={32} color="var(--color-yellow)" />
              <h3>Energy Efficiency</h3>
              <p>We optimize older infrastructure with modern, high-efficiency power supplies and firmware updates to ensure performance-per-watt remains competitive.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
