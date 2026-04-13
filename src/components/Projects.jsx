import React from 'react';

const projects = [
  {
    num: '01',
    title: 'Multi-Env AWS Infrastructure with Terraform',
    desc: 'Designed and provisioned a fully automated, reusable multi-environment AWS setup (dev/staging/prod) using Terraform modules. Includes VPC, EC2, IAM roles, S3 buckets, Security Groups, and Route Tables — eliminating manual drift between environments.',
    tags: ['Terraform', 'AWS EC2', 'VPC', 'IAM', 'S3'],
    link: 'https://github.com/tejdal2000',
  },
  {
    num: '02',
    title: 'Kubernetes Microservices Deployment on EKS',
    desc: 'Containerized a multi-service application with Docker and deployed it to Amazon EKS. Configured Kubernetes Deployments, Services, Ingress, and HPA for auto-scaling. Integrated CloudWatch for cluster-level monitoring and alerting.',
    tags: ['Kubernetes', 'Amazon EKS', 'Docker', 'CloudWatch', 'HPA'],
    link: 'https://github.com/tejdal2000',
  },
  {
    num: '03',
    title: 'Jenkins CI/CD Pipeline — Automated Build & Deploy',
    desc: 'Built a full Jenkins pipeline that pulls from GitHub, compiles with Maven, runs tests, packages a Docker image, pushes to ECR, and deploys to the EKS cluster — full deployment in under 8 minutes with zero manual steps.',
    tags: ['Jenkins', 'GitHub', 'Maven', 'Docker', 'ECR', 'EKS'],
    link: 'https://github.com/tejdal2000',
  },
  {
    num: '04',
    title: 'Grafana + Prometheus Observability Stack',
    desc: 'Set up a complete observability stack: Prometheus scrapes metrics, Grafana renders real-time dashboards for CPU, memory, request rate, and error budgets. CloudWatch alarms trigger SNS notifications for critical events.',
    tags: ['Grafana', 'Prometheus', 'CloudWatch', 'SNS', 'Alerting'],
    link: 'https://github.com/tejdal2000',
  },
  {
    num: '05',
    title: 'Ansible Playbooks — Server Config Automation',
    desc: 'Wrote idempotent Ansible playbooks to automate server provisioning, software installation, patching, and security hardening across Ubuntu EC2 instances — replacing hours of manual setup with a single command.',
    tags: ['Ansible', 'Linux', 'AWS EC2', 'Automation'],
    link: 'https://github.com/tejdal2000',
  },
  {
    num: '06',
    title: 'Secure AWS Networking Architecture',
    desc: 'Architected a production-grade AWS network: public/private subnet layout, NAT Gateway, VPN Gateway for on-prem connectivity, Application Load Balancer, and layered Security Groups enforcing least-privilege traffic rules.',
    tags: ['VPC', 'Subnets', 'ALB', 'NAT Gateway', 'VPN', 'Security Groups'],
    link: 'https://github.com/tejdal2000',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg)', padding: '96px 56px' }}>
      <div className="sec-label">04 — Projects</div>
      <h2 className="sec-title">Things I've <span>Built</span></h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '22px',
      }}>
        {projects.map((p) => (
          <div key={p.num} className="reveal" style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: '14px', padding: '26px',
            display: 'flex', flexDirection: 'column', gap: '14px',
            transition: 'border-color 0.25s, transform 0.2s',
            position: 'relative', overflow: 'hidden',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(0,255,195,0.3)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--accent)', opacity: 0.5 }}>
              // PROJECT {p.num}
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>
              {p.title}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65, fontWeight: 300 }}>
              {p.desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {p.tags.map((t) => (
                <span key={t} style={{
                  fontSize: '0.67rem', fontFamily: 'var(--mono)',
                  padding: '3px 9px', borderRadius: '5px',
                  background: 'rgba(61,139,255,0.1)', color: '#6ca7ff',
                  border: '1px solid rgba(61,139,255,0.15)',
                }}>
                  {t}
                </span>
              ))}
            </div>
            <a href={p.link} target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--accent)',
              textDecoration: 'none', marginTop: 'auto',
              display: 'inline-flex', alignItems: 'center', gap: '6px', opacity: 0.7,
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
            >
              ↗ View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
