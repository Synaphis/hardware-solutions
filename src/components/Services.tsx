'use client';
import { motion } from 'framer-motion';
import { Wrench, Shield, GitMerge } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './Services.module.css';

export default function Services() {
  const reduced = useReducedMotion();

  const services = [
    {
      title: "Hardware Procurement",
      description: "We supply enterprise-grade refurbished hardware from tier-1 OEMs directly from our extensive inventory. Every unit undergoes rigorous multi-point testing and quality assurance before dispatch.",
      icon: <Shield size={32} strokeWidth={1.5} />,
      color: "var(--color-green)"
    },
    {
      title: "Custom Configuration",
      description: "Every server, storage, and networking solution can be built to your exact specifications, including CPU, memory, storage, and NIC configurations tailored to your workload.",
      icon: <Wrench size={32} strokeWidth={1.5} />,
      color: "var(--color-orange)"
    },
    {
      title: "Technical Consultation",
      description: "Our team of OEM-certified hardware engineers, data center infrastructure architects, and virtualization specialists provide hands-on guidance for integrating, scaling, and optimizing your compute environments both remotely and on-site.",
      icon: <GitMerge size={32} strokeWidth={1.5} />,
      color: "var(--color-blue)"
    }
  ];

  const Header = reduced ? 'div' : motion.div;
  const headerProps = reduced ? {} : {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5 }
  };

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <Header className={styles.header} {...headerProps}>
          <span className="caption"><span className="captionDot"/>What We Do</span>
          <h2 className="sectionTitle">End-to-End Hardware Solutions.</h2>
          <p className="sectionSubtitle">
            From procurement to configuration and post-sales support, we handle the entire hardware lifecycle.
          </p>
        </Header>

        <div className={styles.grid}>
          {services.map((service, idx) => {
            const Card = reduced ? 'div' : motion.div;
            const cardProps = reduced ? {} : {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: idx * 0.1, duration: 0.5 }
            };
            return (
              <Card key={idx} className={styles.card} {...cardProps}>
                <div className={styles.iconWrapper} style={{ color: service.color }}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
