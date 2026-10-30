import React from 'react';
import { ArrowUp, Github, Heart } from 'lucide-react';
import { personalInfo } from '../data/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Top Row */}
        <div className="footer-top-row">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div className="nav-brand" style={{ fontSize: '1.35rem' }}>
              <span>{personalInfo.handle}</span>
              <span className="nav-brand-dot" aria-hidden="true" />
            </div>
            <p style={{ fontSize: '0.88rem', color: '#888', maxWidth: 360 }}>
              Aspiring Software Developer passionate about web engineering, programming fundamentals, and problem-solving.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav-links">
            <a href="#about" className="footer-nav-link">About</a>
            <a href="#skills" className="footer-nav-link">Skills</a>
            <a href="#projects" className="footer-nav-link">Projects</a>
            <a href="#journey" className="footer-nav-link">Journey</a>
            <a href="#goals" className="footer-nav-link">Goals</a>
            <a href="#contact" className="footer-nav-link">Contact</a>
          </div>

          {/* Back to top & GitHub */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom-row">
          <div>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div>
            Built with React &bull; Hosted by Ashish Sahoo &bull; Cuttack, India
          </div>
        </div>
      </div>
    </footer>
  );
}

