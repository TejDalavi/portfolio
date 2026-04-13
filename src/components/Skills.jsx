import React from 'react';

const categories = [
  {
    icon: '☁️', name: 'Cloud Platforms', color: '#ff9d00',
    tags: [
      { label: 'AWS EC2', hot: true }, { label: 'Amazon EKS', hot: true },
      { label: 'S3', hot: true }, { label: 'VPC', hot: true },
      { label: 'EBS' }, { label: 'RDS' }, { label: 'Route 53' },
      { label: 'IAM' }, { label: 'Secrets Manager' }, { label: 'CloudFormation' },
    ],
  },
  {
    icon: '🏗️', name: 'Infrastructure as Code', color: '#00ffc3',
    tags: [
      { label: 'Terraform', hot: true }, { label: 'AWS CloudFormation', hot: true },
      { label: 'IaC Modules' }, { label: 'Reusable Templates' },
    ],
  },
  {
    icon: '🔁', name: 'CI/CD & DevOps', color: '#3d8bff',
    tags: [
      { label: 'Jenkins', hot: true }, { label: 'Git', hot: true },
      { label: 'GitHub', hot: true }, { label: 'Bitbucket' },
      { label: 'Maven' }, { label: 'Pipeline Automation' },
    ],
  },
  {
    icon: '📦', name: 'Containers & Orchestration', color: '#c084fc',
    tags: [
      { label: 'Docker', hot: true }, { label: 'Kubernetes (K8s)', hot: true },
      { label: 'Amazon EKS', hot: true }, { label: 'Microservices' },
    ],
  },
  {
    icon: '📊', name: 'Monitoring & Observability', color: '#ff6b35',
    tags: [
      { label: 'AWS CloudWatch', hot: true }, { label: 'Grafana', hot: true },
      { label: 'Prometheus' }, { label: 'Alerting' }, { label: 'Dashboards' },
    ],
  },
  {
    icon: '⚙️', name: 'Config Management & OS', color: '#34d399',
    tags: [
      { label: 'Ansible', hot: true }, { label: 'Linux (Ubuntu)', hot: true },
      { label: 'Windows Server' }, { label: 'Bash Scripting' },
    ],
  },
  {
    icon: '🌐', name: 'Networking', color: '#f59e0b',
    tags: [
      { label: 'VPC Design' }, { label: 'Subnets' }, { label: 'Security Groups' },
      { label: 'Route Tables' }, { label: 'Load Balancers' },
      { label: 'VPN Gateway' }, { label: 'TCP/IP' }, { label: 'OSI Model' },
    ],
  },
  {
    icon: '🔐', name: 'Security & Dev', color: '#60a5fa',
    tags: [
      { label: 'IAM Policies' }, { label: 'Least Privilege' },
      { label: 'Vulnerability Testing' }, { label: 'React.js' }, { label: 'Auto Scaling' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg)', padding: '96px 56px' }}>
      <div className="sec-label">02 — Technical Skills</div>
      <h2 className="sec-title">What I <span>Work With</span></h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
      }}>
        {categories.map((cat) => (
          <div key={cat.name} className="reveal" style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: '14px', padding: '24px',
            borderTop: `2px solid ${cat.color}`,
            transition: 'transform 0.2s, border-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '1.3rem' }}>{cat.icon}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {cat.name}
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
              {cat.tags.map((t) => (
                <span key={t.label} style={{
                  fontFamily: 'var(--mono)', fontSize: '0.68rem',
                  padding: '4px 10px', borderRadius: '6px',
                  background: t.hot ? 'rgba(0,255,195,0.08)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${t.hot ? 'rgba(0,255,195,0.2)' : 'var(--border)'}`,
                  color: t.hot ? 'var(--accent)' : 'var(--text)',
                }}>
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
