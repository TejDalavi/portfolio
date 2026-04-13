import React from 'react';

const links = [
  { icon: '✉️', label: 'tejdal2000@gmail.com', href: 'mailto:tejdal2000@gmail.com' },
  { icon: '📞', label: '+91 93706 31957',       href: 'tel:+919370631957' },
  { icon: '💼', label: 'LinkedIn',              href: 'https://linkedin.com/in/tejas-dalavi' },
  { icon: '💻', label: 'GitHub',                href: 'https://github.com/tejdal2000' },
];

export default function Contact() {
  return (
    <>
      <section id="contact" style={{ background: 'var(--bg)', padding: '96px 56px', textAlign: 'center' }}>
        <div className="sec-label" style={{ justifyContent: 'center' }}>06 — Contact</div>
        <h2 className="sec-title reveal">Let's <span>Connect</span></h2>

        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p className="reveal" style={{
            fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.7,
            marginBottom: '36px', fontWeight: 300,
          }}>
            I'm actively looking for DevOps and Cloud Engineering opportunities across India.
            Whether you have a role, a project, or just want to talk infrastructure — my inbox is open.
          </p>

          <div className="reveal" style={{
            display: 'flex', justifyContent: 'center',
            gap: '14px', flexWrap: 'wrap',
          }}>
            {links.map((l) => (
              <a key={l.label} href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: 'var(--card)', border: '1px solid var(--border)',
                  color: 'var(--text)', padding: '12px 22px', borderRadius: '10px',
                  fontSize: '0.85rem', fontFamily: 'var(--mono)',
                  transition: 'border-color 0.2s, color 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = 'var(--accent)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text)';
                }}
              >
                <span style={{ fontSize: '1rem' }}>{l.icon}</span>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'var(--s1)', borderTop: '1px solid var(--border)',
        padding: '24px 56px',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '12px',
      }}>
        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--muted)' }}>
          © 2025 <span style={{ color: 'var(--accent)' }}>Tejas Dalavi</span> · DevOps & Cloud Engineer
        </p>
        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--muted)' }}>
          Built with <span style={{ color: 'var(--accent)' }}>React.js</span> · Pune, Maharashtra 🇮🇳
        </p>
      </footer>
    </>
  );
}
