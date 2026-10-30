import React, { useState } from 'react';
import { ArrowDown, FileText, MapPin, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/config';
import PlaceholderModal from './PlaceholderModal';
import ashishPhoto from '../assets/ashish-photo.jpg';

export default function Hero() {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    // Check if a real resume.pdf exists in public/
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          window.open('/resume.pdf', '_blank');
        } else {
          setModalData({
            title: 'Resume Placeholder',
            message:
              'No resume PDF is currently uploaded. To link your official resume, place your resume PDF named "resume.pdf" inside the "public/" folder of this project (public/resume.pdf). Once added, clicking this button will immediately open or download it.',
            filePath: 'public/resume.pdf',
            githubProfile: personalInfo.social.github
          });
          setIsModalOpen(true);
        }
      })
      .catch(() => {
        setModalData({
          title: 'Resume Placeholder',
          message:
            'No resume PDF is currently uploaded. To link your official resume, place your resume PDF named "resume.pdf" inside the "public/" folder of this project (public/resume.pdf). Once added, clicking this button will immediately open or download it.',
          filePath: 'public/resume.pdf',
          githubProfile: personalInfo.social.github
        });
        setIsModalOpen(true);
      });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <h1 className="hero-greeting">
              Hi, I'm <br />
              <span className="highlight">Ashish Sahoo</span>
            </h1>

            <div className="hero-subtitle-role">
              <span>Fullstack Developer 💻</span>
            </div>

            <div className="hero-paragraphs">
              <p>
                I'm a Full-Stack Developer passionate about building modern web applications using{' '}
                <span className="text-accent">React</span>,{' '}
                <span className="text-accent">TypeScript</span>,{' '}
                <span className="text-accent">Node.js</span>,{' '}
                <span className="text-accent">Express.js</span>,{' '}
                <span className="text-accent">SQL</span>,{' '}
                <span className="text-accent">GraphQL</span>, and{' '}
                <span className="text-accent">GCP</span>. My toolkit also includes{' '}
                <span className="text-accent">Playwright</span>,{' '}
                <span className="text-accent">Jest</span>,{' '}
                <span className="text-accent">Webpack</span>, and{' '}
                <span className="text-accent">Docker</span> to streamline testing, builds, and deployment.
              </p>
              <p>
                Right now, I'm diving into <span className="text-accent">Next.js</span> and learning how to layer <span className="text-accent">TypeScript</span> more effectively across my projects.
              </p>
              <p>
                If you'd like to see what I've been working on, follow my work log on{' '}
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent"
                >
                  GitHub
                </a>{' '}
                and updates on{' '}
                <a
                  href="https://www.linkedin.com/in/ashish-sahoo-630626411/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent"
                >
                  LinkedIn
                </a>
                , where I share progress, small wins, and experiments as I keep building and learning.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="btn btn-primary"
              >
                <span>Browse Projects</span>
                <ArrowDown size={16} />
              </a>

              <button
                type="button"
                onClick={handleResumeClick}
                className="btn btn-secondary"
              >
                <FileText size={16} />
                <span>Resume</span>
              </button>
            </div>

            {/* Metadata Strip */}
            <div className="hero-meta-strip">
              <div className="hero-meta-item">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="hero-meta-item">
                <GraduationCap size={16} />
                <span>{personalInfo.education}</span>
              </div>
            </div>
          </div>

          {/* Right Visual: Personal Photograph in Circular Frame */}
          <div className="hero-photo-wrapper">
            <div className="hero-photo-glow" aria-hidden="true" />
            <div className="hero-photo-frame">
              <img
                src={ashishPhoto}
                alt="Ashish Sahoo"
                className="hero-photo-img"
                loading="eager"
              />
            </div>
            <div className="hero-photo-badge">
              <span className="pulse-dot" style={{ width: 8, height: 8 }} />
              <span>Actively Learning & Building</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <ArrowDown size={16} />
        </div>
      </div>

      {/* Helper Modal for Resume placeholder */}
      <PlaceholderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={modalData}
      />
    </section>
  );
}
