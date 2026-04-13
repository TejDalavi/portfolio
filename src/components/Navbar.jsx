import React, { useState, useEffect } from 'react';

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '18px 56px',
    background: 'rgba(6,8,16,0.88)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--border)',
    transition: 'padding 0.3s',
  },
  logo: {
    fontFamily: 'var(--mono)', fontSize: '0.88rem', color: 'var(--accent)', letterSpacing: '1px',
  },
  logoDim: { color: 'var(--muted)' },
  links: {
    display: 'flex', gap: '32px', listStyle: 'none',
  },
  link: {
    fontFamily: 'var(--mono)', fontSize: '0.75rem', fontWeight: 500,
    color: 'var(--muted)', textDecoration: 'none',
    textTransform: 'uppercase', letterSpacing: '1px', transition: 'color 0.2s',
  },
  cta: {
    background: 'var(--accent)', color: '#000', border: 'none',
    padding: '8px 20px', borderRadius: '6px',
    fontFamily: 'var(--mono)', fontSize: '0.75rem', fontWeight: 700,
    cursor: 'pointer', letterSpacing: '0.5px', textDecoration: 'none',
    transition: 'opacity 0.2s',
  },
  menuBtn: {
    display: 'none', background: 'none', border: '1px solid var(--border)',
    color: 'var(--text)', padding: '6px 10px', borderRadius: '6px',
    cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: '0.8rem',
  },
};

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        td<span style={styles.logoDim}>.</span>dev
      </div>

      {!isMobile && (
        <ul style={styles.links}>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  ...styles.link,
                  color: active === item.toLowerCase() ? 'var(--accent)' : 'var(--muted)',
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}

      {isMobile ? (
        <button style={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      ) : (
        <a href="mailto:tejdal2000@gmail.com" style={styles.cta}>Hire Me</a>
      )}

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: '56px', left: 0, right: 0,
          background: 'var(--s1)', borderBottom: '1px solid var(--border)',
          padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 99,
        }}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ ...styles.link, color: 'var(--text)', fontSize: '0.9rem' }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="mailto:tejdal2000@gmail.com" style={{ ...styles.cta, textAlign: 'center' }}>
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
