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

        {/* LOGO + NAME */}
        <Link href="/" className={styles.logo} aria-label="Home">
          <Image
            src="/logo.svg"
            alt="AORIXIS logo"
            width={48}
            height={48}
            className={styles.logoImage}
            priority
          />
          <span className={styles.brandName}>AORIXIS</span>
        </Link>

        {/* NAV LINKS */}
        <nav className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${pathname === l.href ? styles.linkActive : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/#enquiry-form"
            className={styles.quoteBtn}
            onClick={() => setMenuOpen(false)}
          >
            Request Quote
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </header>
  );
}