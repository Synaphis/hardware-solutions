'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Clock, Award, Globe, HeartHandshake } from 'lucide-react';
import styles from './TrustSignals.module.css';

export default function TrustSignals() {
  const signals = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Certified Refurbished",
      text: "Multi-point diagnostic and stress testing on all components.",
      color: "var(--color-green)"
    },
    {
      icon: <Award size={24} />,
      title: "3-Year Warranty",
      text: "Industry-leading gold-standard hardware protection as standard.",
      color: "var(--color-yellow)"
    },
    {
      icon: <Truck size={24} />,
      title: "Global Distribution",
      text: "Express tracked freight to over 100 countries worldwide.",
      color: "var(--color-blue)"
    },
    {
      icon: <Clock size={24} />,
      title: "Next-Day Dispatch",
      text: "Stocked items dispatched within 24 hours of PO verification.",
      color: "var(--color-orange)"
    },
    {
      icon: <HeartHandshake size={24} />,
      title: "B2B Specialized",
      text: "Flexible payment terms and dedicated account management.",
      color: "var(--color-purple)"
    },
    {
      icon: <Globe size={24} />,
      title: "ESG Committed",
      text: "Extending IT lifecycles and reducing corporate e-waste.",
      color: "var(--color-red)"
    }
  ];

  return (
    <section className={styles.trustSection}>
      <div className="container">
        <div className={styles.grid}>
          {signals.map((signal, idx) => (
            <motion.div 
              key={idx}
              className={styles.signalCard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className={styles.iconWrapper} style={{ color: signal.color }}>
                {signal.icon}
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{signal.title}</h3>
                <p className={styles.text}>{signal.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
