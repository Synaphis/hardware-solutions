'use client';
import { motion } from 'framer-motion';
import { Landmark, Database, Building2, Cpu, Network, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import styles from './Industries.module.css';

const industries = [
  {
    id: 'fintech',
    title: 'Financial Services & High-Frequency Trading',
    icon: <Landmark size={40} />,
    color: 'var(--color-blue)',
    desc: 'Low-latency networking and high-compute blade infrastructure designed for the most demanding trading environments and core banking systems.',
    features: ['Low-Latency Switching', 'NVMe All-Flash Arrays', 'High-Density Compute Nodes'],
    badge: 'MISSION CRITICAL'
  },
  {
    id: 'datacenters',
    title: 'Hyperscale Data Centers & MSPs',
    icon: <Database size={40} />,
    color: 'var(--color-purple)',
    desc: 'Mass storage solutions and scalable server fleets for cloud providers and managed service operations looking to optimize CAPEX without compromising reliability.',
    features: ['High-Capacity SAS/SATA Arrays', '40/100GbE Infrastructure', 'Scalable Rack Solutions'],
    badge: 'HYPERSCALE READY'
  },
  {
    id: 'enterprise',
    title: 'Global Enterprise IT & Infrastructure',
    icon: <Building2 size={40} />,
    color: 'var(--color-orange)',
    desc: 'Core infrastructure for the modern workplace. From VDI workstation fleets to redundant core networking and backup power systems.',
    features: ['Precision Workstations', 'Core & Edge Routing', 'Enterprise Storage & DR'],
    badge: 'TIER 1 RELIABILITY'
  }
];

export default function IndustriesContent() {
  return (
    <div className={styles.page}>
      
      <div className="container">
        <div className={styles.heroSection}>
          <h1 className="sectionTitle">Sector-Specific <br/><span className={styles.accentText}>Hardware Solutions.</span></h1>
          <p className="sectionSubtitle">
            We don&apos;t just supply hardware; we understand the unique pressure-points of your industry. Our engineering team specializes in configuring infrastructure that aligns with your specific workload requirements.
          </p>
        </div>

        <div className={styles.industryGrid}>
          {industries.map((ind, idx) => (
            <motion.div 
              key={ind.id} 
              className={styles.indCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className={styles.indCardHeader}>
                 <span className={styles.indBadge}>{ind.badge}</span>
                 <div className={styles.indIcon} style={{ color: ind.color }}>
                   {ind.icon}
                 </div>
              </div>
              
              <h2 className={styles.indTitle}>{ind.title}</h2>
              <p className={styles.indDesc}>{ind.desc}</p>
              
              <div className={styles.indFeatures}>
                 {ind.features.map((feat, fidx) => (
                   <div key={fidx} className={styles.indFeature}>
                      <div className={styles.featDot} style={{ background: ind.color }} />
                      <span>{feat}</span>
                   </div>
                 ))}
              </div>

              <div className={styles.indFooter}>
                 <Link href="/#enquiry-form" className={styles.exploreLink}>
                   Request Solution <ArrowRight size={16} />
                 </Link>
              </div>
              
              <div className={styles.indAbstractBg}>
                 <Network size={200} strokeWidth={0.5} opacity={0.05} />
              </div>
            </motion.div>
          ))}
        </div>

        <section className={styles.expertiseStrip}>
           <div className={styles.expItem}>
              <ShieldCheck size={24} color="var(--color-green)" />
              <div>
                 <h4>Certified Reliability</h4>
                 <p>All industry-bound rigs pass multi-tier diagnostic stress tests.</p>
              </div>
           </div>
           <div className={styles.expItem}>
              <Cpu size={24} color="var(--color-blue)" />
              <div>
                 <h4>OEM Alignment</h4>
                 <p>Configurations maintained within strict OEM compatibility guidelines.</p>
              </div>
           </div>
           <div className={styles.expItem}>
              <Zap size={24} color="var(--color-yellow)" />
              <div>
                 <h4>Rapid Provisioning</h4>
                 <p>Global logistics network ensures supply chain continuity.</p>
              </div>
           </div>
        </section>

      </div>

    </div>
  );
}
