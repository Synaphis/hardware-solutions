'use client';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import styles from './LeadMagnet.module.css';

export default function LeadMagnet() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.badge}>
              <BookOpen size={16} />
              <span>Free Technical Guide</span>
            </div>
            <h2 className={styles.title}>
              The Enterprise Hardware <br/>
              <span className={styles.accent}>Buyer’s Playbook 2026</span>
            </h2>
            <p className={styles.desc}>
              Learn how CTOs are reducing infrastructure CAPEX by 30–50% while maintaining Tier-1 reliability. Includes cost-comparison matrices and lifecycle strategies.
            </p>
            <ul className={styles.features}>
              <li><CheckCircle size={18} className={styles.check} /> Refurbished vs. New ROI Analysis</li>
              <li><CheckCircle size={18} className={styles.check} /> Global Supply Chain Lead-Time Hacks</li>
              <li><CheckCircle size={18} className={styles.check} /> OEM Warranty Maintenance Strategies</li>
            </ul>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className={styles.input}
                required
              />
              <button type="submit" className={styles.submitBtn}>
                Get The Playbook <ArrowRight size={18} />
              </button>
            </form>
            <p className={styles.privacy}>
              Join 500+ IT leaders receiving our weekly hardware insights.
            </p>
          </div>
          <div className={styles.visual}>
            <div className={styles.bookMockup}>
               <div className={styles.bookCover}>
                  <div className={styles.bookLogo}>AORIXIS</div>
                  <div className={styles.bookTitle}>PLAYBOOK <br/> 2026</div>
               </div>
               <div className={styles.bookPages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
