import React from 'react';

const degrees = [
  {
    degree: 'Master of Science in Computer Science (MCS)',
    uni: 'Savitribai Phule Pune University',
    year: '2021 – 2023',
    score: '75.55%',
    location: 'Pune, Maharashtra',
  },
  {
    degree: 'Bachelor of Science in Computer Science (BCS)',
    uni: 'Savitribai Phule Pune University',
    year: '2018 – 2021',
    score: '76.26%',
    location: 'Pune, Maharashtra',
  },
];

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--s1)', padding: '96px 56px' }}>
      <div className="sec-label">05 — Education</div>
      <h2 className="sec-title">Academic <span>Background</span></h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '22px',
      }}>
        {degrees.map((d) => (
          <div key={d.degree} className="reveal" style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: '14px', padding: '28px',
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(61,139,255,0.3)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: '6px' }}>
              {d.degree}
            </div>
            <div style={{
              fontSize: '0.85rem', color: 'var(--accent2)',
              fontFamily: 'var(--mono)', marginBottom: '16px',
            }}>
              {d.uni}
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[d.year, `Score: ${d.score}`, d.location].map((chip) => (
                <span key={chip} style={{
                  fontSize: '0.75rem', color: 'var(--muted)',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border)',
                  padding: '4px 10px', borderRadius: '6px',
                }}>
                  {chip.startsWith('Score') ? (
                    <>{chip.split(':')[0]}: <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{chip.split(':')[1]}</span></>
                  ) : chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
