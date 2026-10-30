import React from 'react';
import { GraduationCap, Code2, MapPin, Target, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/config';

export default function About() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap size={22} />;
      case 'Code2':
        return <Code2 size={22} />;
      case 'MapPin':
        return <MapPin size={22} />;
      case 'Target':
        return <Target size={22} />;
      default:
        return <Code2 size={22} />;
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">About Me</div>
          <h2 className="section-title">{personalInfo.about.heading}</h2>
          <p className="section-subtitle">
            A developer in the making, combining curiosity with persistent practice.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative & Interests */}
          <div className="about-text">
            {personalInfo.about.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}

            <div className="about-interests-wrapper">
              <h3 className="about-interests-label">Key Learning Interests</h3>
              <div className="interests-tags-flex">
                {personalInfo.about.interests.map((interest, i) => (
                  <div key={i} className="interest-pill">
                    <CheckCircle2 size={14} color="#FFD600" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Compact Information Cards */}
          <div className="about-cards-grid">
            {personalInfo.about.infoCards.map((card) => (
              <div key={card.id} className="info-card">
                <div className="info-card-icon" aria-hidden="true">
                  {getIcon(card.icon)}
                </div>
                <div>
                  <div className="info-card-label">{card.label}</div>
                  <div className="info-card-value">{card.value}</div>
                  <p className="info-card-desc">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

