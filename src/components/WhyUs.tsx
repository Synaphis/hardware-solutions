'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, CreditCard, Plane, Trash2, Leaf } from 'lucide-react';
import styles from './WhyUs.module.css';

export default function WhyUs() {
  const items = [
    {
      title: "Extensive Inventory & QA",
      desc: "Our certified QA technicians and supply chain experts ensure every hardware component from our inventory undergoes multi-point diagnostics, stress testing, and firmware verification before deployment. We stand behind every configuration.",
      icon: <ShieldCheck size={26} strokeWidth={1.5} />,
      color: "var(--color-purple)"
    },
    {
      title: "Warranty & Engineering Support",
      desc: "All supplied hardware includes warranty coverage. Our dedicated team of OEM-certified hardware engineers, storage specialists, and network architects provides expert remote support for deployment, troubleshooting, and configuration.",
      icon: <Wrench size={26} strokeWidth={1.5} />,
      color: "var(--color-blue)"
    },
    {
      title: "Flexible Payment Terms",
      desc: "We understand enterprise procurement cycles. We offer NET 30 / NET 60 terms for qualified accounts, along with standard wire transfers, credit cards, and purchase orders.",
      icon: <CreditCard size={26} strokeWidth={1.5} />,
      color: "var(--color-orange)"
    },
    {
      title: "Global Logistics Network",
      desc: "Strategically positioned to dispatch worldwide. Most orders ship within 24 hours with tracked, insured freight to over 100 countries across Europe, Americas, and APAC.",
      icon: <Plane size={26} strokeWidth={1.5} />,
      color: "var(--color-accent-white)"
    },
    {
      title: "IT Asset Disposal (ITAD)",
      desc: "Decommissioning old infrastructure? We offer certified buy-back programs with secure data destruction and environmentally compliant disposal for end-of-life assets.",
      icon: <Trash2 size={26} strokeWidth={1.5} />,
      color: "var(--color-red)"
    },
    {
      title: "Sustainability & Circular Economy",
      desc: "Every refurbished unit we ship is one less manufactured from scratch. We help organizations extend IT lifecycles, reduce e-waste, and meet ESG commitments pragmatically.",
      icon: <Leaf size={26} strokeWidth={1.5} />,
      color: "var(--color-green)"
    }
  ];

  return (
    <section id="why-us" className={styles.whyUs}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="caption"><span className="captionDot" />Why Partner With Us</span>
          <h2 className="sectionTitle">Built for Enterprise Procurement.</h2>
          <p className="sectionSubtitle">
            We operate specifically for B2B. From flexible payment terms to certified asset disposal, everything is structured around how enterprise IT teams actually buy.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className={styles.item}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
            >
              <div className={styles.itemIcon} style={{ color: item.color }}>{item.icon}</div>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Payment Terms Banner */}
        <motion.div
          className={styles.paymentBanner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.paymentLeft}>
            <h3 className={styles.paymentTitle}>Payment Methods & Terms</h3>
            <p className={styles.paymentSubtitle}>Flexible options for enterprise procurement workflows.</p>
          </div>
          <div className={styles.paymentMethods}>
            <span className={styles.method}>Wire Transfer</span>
            <span className={styles.method}>NET 30</span>
            <span className={styles.method}>NET 60</span>
            <span className={styles.method}>Credit Card</span>
            <span className={styles.method}>Purchase Order</span>
            <span className={styles.method}>PayPal</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
