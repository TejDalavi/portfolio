import React from 'react';

const jobs = [
  {
    role: 'DevOps Engineer',
    company: 'ADYZEE Technology',
    period: 'Feb 2025 – Present',
    location: 'Pune, Maharashtra',
    desc: 'Leading DevOps operations for development and production AWS environments — automating infrastructure, managing containerized deployments on EKS, and ensuring system availability through proactive monitoring and incident response.',
    bullets: [
      <>Designed and provisioned <strong>multi-environment AWS infrastructure</strong> using EC2, S3, IAM, VPC, Load Balancers, and Route Tables for dev and prod environments.</>,
      <>Built <strong>reusable Terraform IaC modules</strong> enabling consistent, repeatable deployments across environments with zero config drift.</>,
      <>Created and maintained <strong>Jenkins CI/CD pipelines</strong> automating build → test → deploy, significantly reducing release cycle time and manual effort.</>,
      <>Managed <strong>containerized microservices on Amazon EKS</strong> using Docker, delivering scalable and resilient production deployments.</>,
      <>Configured <strong>VPCs, Subnets, Security Groups, Route Tables, and VPN Gateways</strong> for secure, optimized multi-tier network architecture.</>,
      <>Implemented <strong>CloudWatch + Grafana monitoring</strong> with custom dashboards and alerting for proactive performance and availability tracking.</>,
      <>Enforced cloud security via <strong>IAM roles, policies, and Secrets Manager</strong> following a least-privilege access model.</>,
      <>Used <strong>Ansible</strong> for configuration management — automating server setup, patching, and deployments to eliminate toil.</>,
      <><strong>Optimized cloud costs</strong> by auditing resource utilization and implementing right-sizing and auto-scaling strategies.</>,
      <>Collaborated with Dev and QA teams to improve deployment workflows and overall system reliability.</>,
    ],
  },
  {
    role: 'CCE Agent',
    company: 'Suma Soft Pvt Ltd',
    period: 'Jun 2024 – Feb 2025',
    location: 'Pune, Maharashtra',
    desc: 'Handled customer interactions across multiple channels while maintaining high satisfaction scores and accurate documentation — building communication skills pivotal for cross-team DevOps collaboration.',
    bullets: [
      <>Managed high-volume <strong>inbound and outbound interactions</strong> via calls, email, and chat with prompt resolution.</>,
      <>Maintained thorough <strong>documentation of issues and resolutions</strong>, mirroring the operational discipline required in DevOps incident management.</>,
      <>Developed strong <strong>cross-functional communication skills</strong> now applied to bridging Dev, QA, and Ops teams.</>,
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'IT KART',
    period: 'Jul 2023 – Jan 2024',
    location: 'Pune, Maharashtra',
    desc: 'Gained full-stack development experience and hands-on security exposure — building the developer empathy that makes me a better DevOps engineer.',
    bullets: [
      <>Built <strong>responsive React.js web applications</strong> with routing, nested routing, and component architecture.</>,
      <>Contributed to a <strong>Vulnerability Testing Tool</strong> to identify and assess security weaknesses in web applications.</>,
      <>Maintained version-controlled development workflows using <strong>Git and VS Code</strong>.</>,
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--s1)', padding: '96px 56px' }}>
      <div className="sec-label">03 — Experience</div>
      <h2 className="sec-title">Where I've <span>Worked</span></h2>

      <div style={{ position: 'relative', paddingLeft: '32px' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute', left: 0, top: '8px', bottom: '8px',
          width: '1px',
          background: 'linear-gradient(180deg, var(--accent), var(--accent2), transparent)',
        }} />

        {jobs.map((job, i) => (
          <div key={i} className="reveal" style={{
            position: 'relative',
            marginBottom: i < jobs.length - 1 ? '52px' : 0,
          }}>
            {/* Dot */}
            <div style={{
              position: 'absolute', left: '-36px', top: '6px',
              width: '10px', height: '10px', borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 12px var(--accent)',
            }} />

            {/* Meta row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)' }}>{job.role}</span>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--accent)',
                padding: '3px 10px', background: 'var(--accent-dim)', borderRadius: '5px',
              }}>{job.company}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--muted)' }}>{job.period}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>📍 {job.location}</span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '14px', fontWeight: 300 }}>
              {job.desc}
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {job.bullets.map((b, j) => (
                <li key={j} style={{
                  fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6,
                  paddingLeft: '16px', position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute', left: 0, color: 'var(--accent)',
                    fontSize: '0.75rem', top: '1px',
                  }}>▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
