import React from 'react';

const certs = [
  {
    icon: '🏅', bg: 'rgba(255,153,0,0.12)',
    name: 'AWS Certified Solutions Architect',
    issuer: 'Associate · Amazon Web Services',
  },
  {
    icon: '🛡️', bg: 'rgba(0,149,255,0.12)',
    name: 'Acronis Cloud Tech Professional',
    issuer: 'Certified · Acronis',
  },
  {
    icon: '📍', bg: 'rgba(0,255,195,0.1)',
    name: 'Based in Pune, Maharashtra',
    issuer: '+91 9370631957 · tejdal2000@gmail.com',
    accent: true,
  },
  {
    icon: '🎓', bg: 'rgba(124,106,240,0.12)',
    name: 'MCS — Savitribai Phule Pune University',
    issuer: '2021–2023 · 75.55%',
  },
];

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--s1)', padding: '96px 56px' }}>
      <div className="sec-label">01 — About Me</div>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '64px', alignItems: 'center',
      }}
        className="about-grid"
      >
        {/* Text */}
        <div>
          {[
            <>I'm a <strong style={{ color: 'var(--text)', fontWeight: 500 }}>DevOps and Cloud Engineer</strong> based
              in Pune, Maharashtra, passionate about building infrastructure that scales without breaking.
              My work lives at the intersection of automation, reliability, and speed.</>,
            <>At <strong style={{ color: 'var(--text)', fontWeight: 500 }}>ADYZEE Technology</strong>, I've been
              responsible for end-to-end AWS infrastructure — from designing VPCs and security groups to
              orchestrating microservices on Amazon EKS and keeping production systems observable with
              Grafana and CloudWatch.</>,
          ].map((text, i) => (
            <p key={i} className="reveal" style={{
              fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8,
              marginBottom: '16px', fontWeight: 300,
            }}>{text}</p>
          ))}

          <blockquote className="reveal" style={{
            borderLeft: '3px solid var(--accent)', paddingLeft: '18px',
            color: 'var(--text)', fontSize: '0.95rem', margin: '28px 0',
            lineHeight: 1.7, fontStyle: 'italic',
          }}>
            "I believe infrastructure should be code, deployments should be boring,
            and monitoring should catch problems before users do."
          </blockquote>

          <p className="reveal" style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300 }}>
            Before specializing in DevOps, I gained a strong software foundation through a React.js
            internship and hands-on work on a{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 500 }}>vulnerability testing tool</strong>{' '}
            — giving me a developer-first perspective on operations.
          </p>
        </div>

        {/* Certs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {certs.map((c) => (
            <div key={c.name} className="reveal" style={{
              background: 'var(--card)',
              border: `1px solid ${c.accent ? 'rgba(0,255,195,0.2)' : 'var(--border)'}`,
              borderRadius: '12px', padding: '18px 20px',
              display: 'flex', alignItems: 'center', gap: '16px',
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: c.bg, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0,
              }}>{c.icon}</div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text)' }}>{c.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '2px', fontFamily: 'var(--mono)' }}>{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
