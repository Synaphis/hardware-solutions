'use client';
import { motion } from 'framer-motion';
import { Plane, Truck, Anchor, MapPin, PackageCheck } from 'lucide-react';
import styles from './Logistics.module.css';

export default function LogisticsContent() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className="sectionTitle">Global Infrastructure <br/><span className={styles.accentText}>Logistics Network.</span></h1>
          <p className="sectionSubtitle">
            Secure, tracked, and insured freight for mission-critical enterprise hardware. We ship to over 100 countries with dedicated handling for sensitive IT equipment.
          </p>
        </header>

        <div className={styles.mapVisual}>
           {/* Mock Map Background */}
           <div className={styles.mapDots} />
           <div className={styles.shippingStats}>
              <div className={styles.shipStat}>
                 <h4>100+</h4>
                 <span>Countries Served</span>
              </div>
              <div className={styles.shipStat}>
                 <h4>24-48h</h4>
                 <span>Dispatch Time</span>
              </div>
              <div className={styles.shipStat}>
                 <h4>100%</h4>
                 <span>Fully Insured</span>
              </div>
           </div>
        </div>

        <div className={styles.grid}>
          <motion.div className={styles.card} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className={styles.iconRow}>
              <Plane size={24} color="var(--color-blue)" />
              <Truck size={24} color="var(--color-orange)" />
              <Anchor size={24} color="var(--color-green)" />
            </div>
            <h3>Multi-Modal Freight</h3>
            <p>From rapid air-freight for urgent upgrades to sea-freight for massive data center builds, we coordinate the most efficient transit route for your timeline.</p>
          </motion.div>

          <motion.div className={styles.card} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <PackageCheck size={24} color="var(--color-purple)" />
            <h3>Professional Packing</h3>
            <p>All hardware is statically bagged and palletized using shock-absorbing materials specifically designed for heavy-chassis rackmount equipment.</p>
          </motion.div>

          <motion.div className={styles.card} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <MapPin size={24} color="var(--color-red)" />
            <h3>Real-Time Tracking</h3>
            <p>Maintain full visibility of your assets with door-to-door tracking and secure delivery confirmation for every shipment, regardless of destination.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
