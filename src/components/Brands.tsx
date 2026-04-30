'use client';
import styles from './Brands.module.css';

export default function Brands() {
  const brands = [
    "Hewlett Packard Enterprise", "Dell Technologies", "Cisco Systems",
    "IBM", "Lenovo", "Juniper Networks", "Arista Networks",
    "Broadcom", "Intel", "AMD", "Samsung", "Seagate"
  ];

  return (
    <section className={styles.brandsSection}>
      <div className={`container ${styles.label}`}>
        <span className="caption">Supplying Leading OEMs Worldwide</span>
      </div>
      <div className={styles.marquee}>
        <div className={styles.brandGroup}>
          {brands.map((brand, idx) => (
            <span key={idx} className={styles.brandName}>{brand}</span>
          ))}
        </div>
        <div className={styles.brandGroup}>
          {brands.map((brand, idx) => (
            <span key={`dup-${idx}`} className={styles.brandName}>{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
