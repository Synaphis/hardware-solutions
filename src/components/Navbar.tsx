'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: '/#services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/suppliers', label: 'Sell To Us' },
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="logo"
            width={48}
            height={48}
            className={styles.logoImage}
            priority
          />
          <span className={styles.brandName}>AORIXIS</span>
        </Link>

        <nav className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}

          <Link href="/#enquiry-form" className={styles.quoteBtn}>
            Request Quote
          </Link>
        </nav>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(v => !v)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}