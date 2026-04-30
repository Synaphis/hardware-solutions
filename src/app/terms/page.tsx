'use client';
import styles from './Terms.module.css';

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className="sectionTitle">Terms of <span className={styles.accentText}>Service.</span></h1>
          <p className="sectionSubtitle">Standard B2B hardware procurement and service level agreements.</p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Procurement & Quotes</h2>
            <p>All quotes issued by AORIXIS are valid for 24 business hours unless otherwise specified. Due to the high turnover of secondary market enterprise hardware, availability is not guaranteed until a Purchase Order (PO) is confirmed.</p>
          </section>

          <section className={styles.section}>
            <h2>2. Warranty & Returns</h2>
            <p>Unless specified as &apos;New-in-Box&apos;, all hardware is certified refurbished and carries a standard 1-year replacement warranty. Returns for non-defective equipment are subject to a 20% restocking fee and must be initiated within 14 days of delivery.</p>
          </section>

          <section className={styles.section}>
             <h2>3. Payment Terms</h2>
             <p>Standard payment terms are prepaid via Wire Transfer or Credit Card. NET 30 / NET 60 terms are available for qualified enterprise accounts subject to credit approval by our finance department.</p>
          </section>

          <section className={styles.section}>
             <h2>4. Shipping & Liability</h2>
             <p>All shipments are Ex Works (EXW) from our primary distribution hubs unless otherwise negotiated. Liability for equipment passes to the buyer once the freight carrier has confirmed pickup.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
