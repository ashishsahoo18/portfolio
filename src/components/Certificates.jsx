import React from 'react';
import { Award, BookOpen, Clock, Code, FileText } from 'lucide-react';
import { certificates, certificatesConfig } from '../data/certificates';

export default function Certificates() {
  const hasCertificates = certificates && certificates.length > 0;

  return (
    <section id="certificates" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">Learning Milestones</div>
          <h2 className="section-title">{certificatesConfig.sectionTitle}</h2>
          <p className="section-subtitle">
            Tracking academic achievements, technical credentials, and continuous learning steps.
          </p>
        </div>

        {hasCertificates ? (
          <div className="skills-grid">
            {certificates.map((cert) => (
              <div key={cert.id} className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <Award size={24} color="#FFD600" />
                  <h3 style={{ fontSize: '1.15rem' }}>{cert.title}</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#A3A3A3', marginBottom: '16px' }}>
                  Issued by {cert.issuer} &bull; {cert.date}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    View Credential
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Honest, tasteful milestone banner when no completed external certificates exist */
          <div className="milestone-banner-card">
            <div className="milestone-icon-halo">
              <Award size={32} />
            </div>

            <h3 className="milestone-title">{certificatesConfig.placeholderMessage}</h3>

            <p className="milestone-desc">
              {certificatesConfig.subMessage}
            </p>

            <div className="milestone-cards-subgrid">
              <div className="milestone-item-pill">
                <BookOpen size={20} color="#FFD600" />
                <span style={{ fontWeight: 600, color: '#F5F5F5' }}>B.Tech CST</span>
                <span className="milestone-status-tag">Ongoing Degree</span>
              </div>

              <div className="milestone-item-pill">
                <Code size={20} color="#FFD600" />
                <span style={{ fontWeight: 600, color: '#F5F5F5' }}>Frontend Track</span>
                <span className="milestone-status-tag">Active Practice</span>
              </div>

              <div className="milestone-item-pill">
                <Clock size={20} color="#FFD600" />
                <span style={{ fontWeight: 600, color: '#F5F5F5' }}>DSA Problem Solving</span>
                <span className="milestone-status-tag">Continuous Track</span>
              </div>
            </div>

            <p style={{ marginTop: '24px', fontSize: '0.78rem', color: '#737373' }}>
              To add verified certificates, update the array in <code>src/data/certificates.js</code>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

