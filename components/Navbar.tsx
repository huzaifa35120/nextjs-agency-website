// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">

        {/* === LOGO IMAGE (REPLACE logo.png IF NEEDED) === */}
        <a href="#hero" className="nav__logo-image">
          <Image
            src="/logo.png"   // <-- rename if your file is different
            alt="Target Bluprint Logo"
            width={36}
            height={36}
          />
        </a>

        {/* DESKTOP LINKS */}
        <nav className="nav__links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* MOBILE BURGER */}
        <button
          className="nav__burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="nav__mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
