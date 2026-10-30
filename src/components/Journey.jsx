import React from 'react';
import { journeySteps } from '../data/journey';
import { Clock, CheckCircle2, TrendingUp, Sparkles, Code2, ExternalLink } from 'lucide-react';

export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">Milestone Path</div>
          <h2 className="section-title">My Development Journey</h2>
          <p className="section-subtitle">
            An ongoing roadmap of how I am progressively strengthening my computer science
            knowledge, hands-on engineering, and problem-solving abilities.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="timeline-container">
          <div className="timeline-line" aria-hidden="true" />

          {journeySteps.map((step) => {
            const isCompleted = step.status === 'Completed';
            const isActive = step.status === 'In Active Progress';

            return (
              <div key={step.step} className="timeline-item">
                {/* Timeline Pin */}
                <div className="timeline-node" aria-hidden="true">
                  <div className="timeline-node-inner" />
                </div>

                {/* Timeline Card */}
                <div className="timeline-content-card">
                  <div className="timeline-meta-bar">
                    <span className="timeline-step-badge">STEP {step.step} &bull; {step.phase.toUpperCase()}</span>
                    <span className="timeline-period-badge">
                      {isCompleted && <CheckCircle2 size={12} style={{ display: 'inline', marginRight: 4, color: '#27c93f' }} />}
                      {isActive && <Sparkles size={12} style={{ display: 'inline', marginRight: 4, color: '#FFD600' }} />}
                      {step.status}
                    </span>
                  </div>

                  <h3 className="timeline-title">{step.title}</h3>
                  <p className="timeline-desc">{step.description}</p>

                  <div className="timeline-skills-list">
                    {step.skillsGained.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {step.profiles && (
                    <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {step.profiles.map((profile) => (
                        <a
                          key={profile.name}
                          href={profile.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '0.82rem',
                            padding: '6px 14px'
                          }}
                        >
                          <Code2 size={14} color="#FFD600" />
                          <span>{profile.name}</span>
                          <ExternalLink size={12} style={{ color: 'var(--text-muted)' }} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

