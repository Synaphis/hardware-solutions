'use client';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { MouseEvent } from 'react';
import { ChevronRight, Server, Database, Network } from 'lucide-react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section className={styles.hero} onMouseMove={handleMouseMove}>
      <div className={styles.hudOverlay}>
        <div className={styles.scanLine} />
        <div className={styles.cornerTL} />
        <div className={styles.cornerTR} />
        <div className={styles.cornerBL} />
        <div className={styles.cornerBR} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            THE HARDWARE <br/>
            <span className={styles.accentText}>AUTHORITY.</span>
          </motion.h1>

          <motion.p 
            className={styles.desc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            B2B partner for certified Tier-1 IT infrastructure. Reduce hardware CAPEX by 30–50% with our expert-configured, rigorously tested, and globally shipped enterprise solutions.
          </motion.p>

          <motion.div 
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/#enquiry-form" className={styles.primaryBtn}>
              Check Inventory & Pricing <ChevronRight size={16} />
            </Link>
          </motion.div>

          <div className={styles.rangeStrip}>
             <div className={styles.rangeItem}>
                <Server size={18} />
                <span>Servers</span>
             </div>
             <div className={styles.rangeItem}>
                <Database size={18} />
                <span>Storage</span>
             </div>
             <div className={styles.rangeItem}>
                <Network size={18} />
                <span>Network</span>
             </div>
          </div>
        </div>

        <motion.div 
          className={styles.visualColumn}
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className={styles.hardwareConsole}>
             <div className={styles.consoleGlow} />
             <div className={styles.rackContainer}>
                {/* 3D Hardware Rack Render (Stylized) */}
                <motion.div 
                  className={styles.rackVisual}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                >
                   <svg viewBox="0 0 400 600">
                      <rect x="100" y="50" width="200" height="500" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      {[...Array(15)].map((_, i) => (
                        <motion.rect
                          key={i}
                          x="110"
                          y={70 + i * 32}
                          width="180"
                          height="20"
                          fill="rgba(41, 121, 255, 0.02)"
                          stroke="rgba(41, 121, 255, 0.15)"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                        />
                      ))}
                      {/* Animated Hub Lasers */}
                      <motion.line
                        x1="100" y1="150" x2="300" y2="150"
                        stroke="var(--color-blue)"
                        strokeWidth="1"
                        animate={{ opacity: [0, 1, 0], y: [150, 450, 150] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />
                   </svg>
                </motion.div>
             </div>
             <div className={styles.telemetry}>
                <div className={styles.teleLine}><span className={styles.mono}>ID: AX TX CAT 01</span></div>
                <div className={styles.teleLine}><span className={styles.mono}>STATUS: SCAN NOMINAL</span></div>
                <div className={styles.teleLine}><span className={styles.mono}>AVAILABILITY: IN STOCK</span></div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
