import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const particleRef = useRef(null);

  useEffect(() => {
    const container = particleRef.current;
    if (!container) return;
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div');
      Object.assign(p.style, {
        position: 'absolute',
        width: '2px', height: '2px',
        background: 'var(--accent)',
        borderRadius: '50%',
        left: Math.random() * 100 + 'vw',
        opacity: '0',
        animation: `float ${6 + Math.random() * 10}s ${Math.random() * 10}s linear infinite`,
        '--dx': (Math.random() * 100 - 50) + 'px',
      });
      container.appendChild(p);
    }
  }, []);

  const stats = [
    { num: '2+', label: 'Years Experience' },
    { num: '2',  label: 'Certifications' },
    { num: '15+', label: 'AWS Services' },
    { num: '75%+', label: 'Academic Score' },
  ];

  return (
    <>
      {/* Floating particles container */}
      <div ref={particleRef} style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
      }} />

      <section id="hero" style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '120px 56px 80px', position: 'relative', overflow: 'hidden',
      }}>
        {/* Grid background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'linear-gradient(rgba(0,255,195,0.03) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(0,255,195,0.03) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'gridDrift 20s linear infinite',
        }} />
        {/* Glow blobs */}
        <div style={{
          position: 'absolute', top: '-200px', right: '-100px',
          width: '700px', height: '700px',
          background: 'radial-gradient(circle,rgba(0,255,195,0.06) 0%,transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-100px', left: '10%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle,rgba(61,139,255,0.05) 0%,transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--accent)',
            border: '1px solid rgba(0,255,195,0.25)', background: 'rgba(0,255,195,0.06)',
            padding: '6px 14px', borderRadius: '20px', marginBottom: '28px',
            animation: 'fadeUp 0.6s ease both',
          }}>
            <span style={{
              width: '6px', height: '6px', background: 'var(--accent)',
              borderRadius: '50%', animation: 'pulse 1.5s infinite', display: 'inline-block',
            }} />
            Open to Work · Pune, India
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: 'var(--body)', fontWeight: 800,
            fontSize: 'clamp(3rem,7vw,5.5rem)', lineHeight: 1.0,
            letterSpacing: '-2px', animation: 'fadeUp 0.6s 0.1s ease both', opacity: 0,
          }}>
            Tejas<br />
            <span style={{ color: 'var(--accent)' }}>Dalavi</span>
            <span style={{ color: 'var(--muted)' }}>.</span>
          </h1>

          {/* Role */}
          <div style={{
            fontFamily: 'var(--mono)', fontSize: '1rem', color: 'var(--accent2)',
            marginTop: '16px', letterSpacing: '1px',
            animation: 'fadeUp 0.6s 0.2s ease both', opacity: 0,
          }}>
            DevOps &amp; Cloud Engineer
          </div>

          {/* Description */}
          <p style={{
            fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75,
            maxWidth: '580px', marginTop: '20px', fontWeight: 300,
            animation: 'fadeUp 0.6s 0.3s ease both', opacity: 0,
          }}>
            I design, automate, and scale{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 500 }}>cloud-native infrastructure</strong>{' '}
            on AWS — wielding Terraform, Kubernetes, and CI/CD pipelines to ship faster
            and break less.{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 500 }}>
              AWS Solutions Architect Associate
            </strong>{' '}
            certified with 2 years of hands-on production experience.
          </p>

          {/* Buttons */}
          <div style={{
            display: 'flex', gap: '14px', marginTop: '36px', flexWrap: 'wrap',
            animation: 'fadeUp 0.6s 0.4s ease both', opacity: 0,
          }}>
            <a href="#contact" style={{
              background: 'var(--accent)', color: '#000',
              padding: '13px 28px', borderRadius: '8px',
              fontFamily: 'var(--mono)', fontSize: '0.82rem', fontWeight: 700,
              letterSpacing: '0.5px', textDecoration: 'none',
            }}>
              Get In Touch
            </a>
            <a href="#experience" style={{
              border: '1px solid var(--border)', color: 'var(--text)',
              padding: '13px 28px', borderRadius: '8px',
              fontFamily: 'var(--mono)', fontSize: '0.82rem',
              textDecoration: 'none',
            }}>
              View Experience
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '40px', marginTop: '56px', flexWrap: 'wrap',
            animation: 'fadeUp 0.6s 0.5s ease both', opacity: 0,
          }}>
            {stats.map((s) => (
              <div key={s.label} style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '16px' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--accent)' }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
