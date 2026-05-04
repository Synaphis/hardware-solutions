'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './EnquiryForm.module.css';

export default function EnquiryForm() {
  const reduced = useReducedMotion();

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '',
    category: '', partNumber: '', brand: '', quantity: '', message: '',
    website: '' // Honeypot field
  });

  const [isCTO, setIsCTO] = useState(false);

  // Check for CTO trigger via hash
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#cto') {
        setIsCTO(true);
        setFormData(prev => ({ ...prev, category: 'cto-build' }));
        // Ensure the form is visible and scrolled into view
        const element = document.getElementById('enquiry-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ 
          name: '', email: '', company: '', phone: '', 
          category: isCTO ? 'cto-build' : '', 
          partNumber: '', brand: '', quantity: '', message: '',
          website: ''
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const categories = [
    { slug: 'enterprise-servers', title: 'Enterprise Servers' },
    { slug: 'storage-systems', title: 'Storage Systems' },
    { slug: 'networking-equipment', title: 'Networking Equipment' },
    { slug: 'server-components', title: 'Server Components' },
    { slug: 'cto-build', title: 'Configure-to-Order (CTO) Build' },
    { slug: 'workstations-computing', title: 'Workstations & Computing' },
    { slug: 'data-center-infrastructure', title: 'Data Center Infrastructure' }
  ];

  const Inner = reduced ? 'div' : motion.div;
  const innerProps = reduced ? {} : {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <div id="cto" style={{ scrollMarginTop: '100px' }} />
      <section id="enquiry-form" className={styles.enquiry}>
      <div className="container">
        <Inner className={styles.inner} {...innerProps}>
          {/* Left side */}
          <div className={styles.left}>
            <span className="caption">Get in Touch</span>
            <h2 className="sectionTitle">
              {isCTO ? 'Start Your CTO Build.' : 'Request a Quote.'}
            </h2>
            <p className="sectionSubtitle">
              {isCTO 
                ? 'Specify your chassis, CPU, memory, and storage requirements. Our lab engineers will build and test your configuration within 24-48 hours.'
                : 'Specify part numbers, quantities, or describe your infrastructure requirements. Our team typically responds within 4 business hours.'}
            </p>

            <div className={styles.formNote}>
              <h4 className={styles.formNoteTitle}>For Bulk & Recurring Orders</h4>
              <p className={styles.formNoteText}>
                We offer dedicated account management, volume pricing, and NET 30/60 payment terms for qualified enterprise accounts. Mention your expected volume in the message.
              </p>
            </div>
          </div>

          {/* Right side — the form */}
          <div>
            {status === 'success' && (
              <div className={styles.successMsg}>
                Your inquiry has been submitted. Our team will be in touch shortly.
              </div>
            )}
            {status === 'error' && (
              <div className={styles.errorMsg}>
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Full Name *</label>
                <input required type="text" id="name" name="name" className={styles.input} value={formData.name} onChange={handleChange} placeholder="John Smith" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Work Email *</label>
                <input required type="email" id="email" name="email" className={styles.input} value={formData.email} onChange={handleChange} placeholder="john@company.com" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="company">Company</label>
                <input type="text" id="company" name="company" className={styles.input} value={formData.company} onChange={handleChange} placeholder="Company Ltd." />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="phone">Phone *</label>
                <input required type="tel" id="phone" name="phone" className={styles.input} value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="category">Product Category</label>
                <select id="category" name="category" className={styles.select} value={formData.category} onChange={handleChange}>
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat.slug} value={cat.slug}>{cat.title}</option>
                  ))}
                  <option value="other">Other / Multiple</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="quantity">Quantity</label>
                <input type="text" id="quantity" name="quantity" className={styles.input} value={formData.quantity} onChange={handleChange} placeholder="e.g., 10 units" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="partNumber">Part Number</label>
                <input type="text" id="partNumber" name="partNumber" className={styles.input} value={formData.partNumber} onChange={handleChange} placeholder="e.g., DL380 Gen10" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="brand">Brand / OEM</label>
                <input type="text" id="brand" name="brand" className={styles.input} value={formData.brand} onChange={handleChange} placeholder="e.g., HPE, Dell, Cisco" />
              </div>
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label className={styles.label} htmlFor="message">
                  {isCTO ? 'Build Specifications / Requirements' : 'Requirements / Message'}
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  className={styles.textarea} 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder={isCTO 
                    ? "e.g., Dual Gold 6230, 256GB RAM, 10x 1.92TB SSD, Mellanox 25GbE..." 
                    : "Describe specifications, configurations, or any other details..."} 
                />
              </div>

              <button type="submit" disabled={status === 'loading'} className={`${styles.submitBtn} ${styles.fullWidth}`}>
                <input 
                  type="text" 
                  name="website" 
                  className={styles.hidden} 
                  tabIndex={-1} 
                  autoComplete="off" 
                  value={formData.website} 
                  onChange={handleChange} 
                />

                {status === 'loading' ? <div className={styles.spinner}></div> : isCTO ? 'Submit Build Request' : 'Submit Inquiry'}
              </button>
            </form>
          </div>
        </Inner>
      </div>
    </section>
    </>
  );
}
