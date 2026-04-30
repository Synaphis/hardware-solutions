'use client';
import { useState } from 'react';
import { Truck, ShieldCheck, Scale, History, Cpu, ArrowRight } from 'lucide-react';
import styles from './Suppliers.module.css';

export default function SuppliersPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '', email: '', category: 'Servers & Computing', assets: '', location: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/supplier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', category: 'Servers & Computing', assets: '', location: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={styles.page}>
      
      <div className="container">
        <div className={styles.heroSection}>
          <h1 className="sectionTitle">Sell Your <br/><span className={styles.accentText}>Enterprise Assets.</span></h1>
          <p className="sectionSubtitle">
            We provide enterprises with a high-credibility exit strategy for their decommissioned IT hardware. From single server racks to complete data center liquidations, we offer market-leading valuations and secure ITAD services.
          </p>
        </div>

        <div className={styles.grid}>
          
          {/* Left: Benefits & Trust */}
          <div className={styles.infoColumn}>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ color: 'var(--color-green)' }}>
                <Scale size={24} />
              </div>
              <h3>Fair Market Valuation</h3>
              <p>We leverage real-time global secondary market data to ensure you receive the highest possible return on your decommissioned assets.</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ color: 'var(--color-blue)' }}>
                <ShieldCheck size={24} />
              </div>
              <h3>Secure Data Destruction</h3>
              <p>All storage media is processed through NIST 800-88 compliant data wiping protocols or physical destruction with full certification.</p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ color: 'var(--color-orange)' }}>
                <Truck size={24} />
              </div>
              <h3>Global Logistics</h3>
              <p>Our team manages the entire reverse-logistics chain, including on-site de-racking, professional packing, and secure transport.</p>
            </div>
          </div>

          {/* Right: Decommissioning Form */}
          <div className={styles.formColumn}>
            <div className={styles.formContainer}>
               <div className={styles.formHeader}>
                  <span>Inventory Decommissioning Form</span>
               </div>
               
               {status === 'success' && (
                 <div style={{ padding: '12px', background: 'rgba(0, 255, 128, 0.1)', color: 'var(--color-green)', border: '1px solid var(--color-green)', borderRadius: '4px', marginBottom: '16px', fontSize: '0.9rem' }}>
                   Your inquiry has been submitted. Our procurement team will be in touch shortly.
                 </div>
               )}
               {status === 'error' && (
                 <div style={{ padding: '12px', background: 'rgba(255, 0, 0, 0.1)', color: '#ff4444', border: '1px solid #ff4444', borderRadius: '4px', marginBottom: '16px', fontSize: '0.9rem' }}>
                   Something went wrong. Please try again or email us directly.
                 </div>
               )}

               <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                       <label>Contact Name</label>
                       <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                    </div>
                    <div className={styles.formGroup}>
                       <label>Company Email</label>
                       <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@enterprise.com" />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                     <label>Asset Categories</label>
                     <select name="category" value={formData.category} onChange={handleChange}>
                        <option>Servers & Computing</option>
                        <option>Storage Arrays</option>
                        <option>Networking Equipment</option>
                        <option>Whole Data Center Liquidation</option>
                        <option>Components / Surplus Inventory</option>
                     </select>
                  </div>

                  <div className={styles.formGroup}>
                     <label>Preliminary Asset List (PIDs / Quantities)</label>
                     <textarea name="assets" value={formData.assets} onChange={handleChange} placeholder="Example: 24x HPE DL380 Gen10, 10x Cisco C9300..." rows={4}></textarea>
                  </div>

                  <div className={styles.formGroup}>
                     <label>Equipment Location</label>
                     <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. London, UK / New York, USA" />
                  </div>

                  <button type="submit" disabled={status === 'loading'} className={styles.submitBtn}>
                    {status === 'loading' ? 'Submitting...' : <><>Request Asset Valuation</> <ArrowRight size={18} /></>}
                  </button>
                  
                  <p className={styles.formNote}>
                    * Our procurement team typically responds with a preliminary valuation within 24 business hours.
                  </p>
               </form>
            </div>

            {/* Abstract Circuit Overlay */}
            <div className={styles.abstractBg}>
               <Cpu size={300} strokeWidth={0.5} opacity={0.03} />
            </div>
          </div>

        </div>

        {/* Circular Economy Section */}
        <section className={styles.circularSection}>
           <div className={styles.circularContent}>
              <div className={styles.certIcon}>
                 <History size={40} color="var(--color-green)" />
              </div>
              <h2>Commitment to the <span style={{color: 'var(--color-green)'}}>Circular Economy.</span></h2>
              <p>
                By selling your hardware to us, you are extending the lifecycle of enterprise equipment and reducing global e-waste. We prioritize refurbishment and recapture over recycling, ensuring that every CPU and storage array serves its full technical purpose.
              </p>
           </div>
        </section>

      </div>

    </div>
  );
}
