'use client';
import { motion } from 'framer-motion';
import { Server, Database, Network, Cpu, Monitor, ShieldAlert } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './ProductCategories.module.css';

export default function ProductCategories() {
  const reduced = useReducedMotion();

  const categories = [
    {
      title: "Enterprise Servers",
      subs: ["Rack Servers (1U / 2U / 4U)", "Blade Servers & Enclosures", "Tower Servers", "GPU Servers", "High-Density Compute Nodes"],
      icon: <Server size={32} strokeWidth={1.5} />,
      color: 'var(--color-blue)'
    },
    {
      title: "Storage Systems",
      subs: ["Storage Area Networks (SAN)", "Network Attached Storage (NAS)", "Direct Attached Storage (DAS)", "Disk Arrays & JBOD Shelves", "Flash / All-SSD Arrays"],
      icon: <Database size={32} strokeWidth={1.5} />,
      color: 'var(--color-orange)'
    },
    {
      title: "Networking Equipment",
      subs: ["Managed & Unmanaged Switches", "Enterprise Routers", "Firewalls & Security Appliances", "Wireless Access Points", "SFP / QSFP Transceivers"],
      icon: <Network size={32} strokeWidth={1.5} />,
      color: 'var(--color-green)'
    },
    {
      title: "Server Components",
      subs: ["CPUs (Intel Xeon / AMD EPYC)", "Server Memory (DDR4 / DDR5 ECC)", "SSDs & Enterprise HDDs", "RAID Controllers & HBAs", "NICs & HCAs", "Power Supplies (PSUs)"],
      icon: <Cpu size={32} strokeWidth={1.5} />,
      color: 'var(--color-red)'
    },
    {
      title: "Workstations & Computing",
      subs: ["Professional Workstations", "Business-Class Desktops", "Enterprise Laptops", "Thin Clients & VDI Endpoints", "GPU Compute Systems"],
      icon: <Monitor size={32} strokeWidth={1.5} />,
      color: 'var(--color-purple)'
    },
    {
      title: "Data Center Infrastructure",
      subs: ["Server Racks & Cabinets (42U)", "Power Distribution Units (PDUs)", "Uninterruptible Power Supplies (UPS)", "KVM Switches & Console Servers", "Cable Management"],
      icon: <ShieldAlert size={32} strokeWidth={1.5} />,
      color: 'var(--color-yellow)'
    }
  ];

  const Header = reduced ? 'div' : motion.div;
  const headerProps = reduced ? {} : {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5 }
  };

  const Grid = reduced ? 'div' : motion.div;
  const gridProps = reduced ? {} : {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="inventory" className={styles.categories}>
      <div className="container">
        <Header className={styles.header} {...headerProps}>
          <div className={styles.headerLeft}>
            <span className="caption"><span className="captionDot"/>Product Range</span>
            <h2 className="sectionTitle">Comprehensive Hardware Portfolio.</h2>
            <p className="sectionSubtitle">
              We provide enterprise-grade equipment that is rigorously tested, fully configurable, and covered by warranty. Every product is built for business, IT infrastructure, and data center deployment.
            </p>
          </div>
        </Header>

        <Grid className={styles.grid} {...gridProps}>
          {categories.map((cat, idx) => {
            const Card = reduced ? 'div' : motion.div;
            const cardProps = reduced ? {} : {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: idx * 0.05, duration: 0.4 }
            };
            return (
              <Card key={idx} className={styles.card} {...cardProps}>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrapper} style={{ color: cat.color }}>{cat.icon}</div>
                  <span className={styles.cardIndex}>0{idx + 1}</span>
                </div>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
                <ul className={styles.subList}>
                  {cat.subs.map((sub, si) => (
                    <li key={si} className={styles.subItem}>
                      <span className={styles.subDot} />
                      {sub}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </Grid>
      </div>
    </section>
  );
}
