import React, { useState } from 'react';
import { Github, ExternalLink, Check, ShoppingBag, Bell, Search, Laptop } from 'lucide-react';
import { projectFilters, projects } from '../data/projects';
import PlaceholderModal from './PlaceholderModal';
import { personalInfo } from '../data/config';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleLinkClick = (e, project, type) => {
    if (type === 'github' && project.isPlaceholderLink) {
      e.preventDefault();
      setModalData({
        title: `${project.title} (GitHub Repo)`,
        message: `The GitHub repository for "${project.title}" will be linked here once published. You can edit this URL in src/data/projects.js.`,
        filePath: 'src/data/projects.js',
        githubProfile: personalInfo.social.github
      });
      setIsModalOpen(true);
    } else if (type === 'demo' && (project.liveIsPlaceholder || !project.liveUrl)) {
      e.preventDefault();
      setModalData({
        title: `${project.title} (Live Demo)`,
        message: `The live demo for "${project.title}" will be linked here once hosted on GitHub Pages or Vercel. You can edit this URL in src/data/projects.js.`,
        filePath: 'src/data/projects.js',
        githubProfile: personalInfo.social.github
      });
      setIsModalOpen(true);
    }
  };

  const renderProjectVisual = (project) => {
    switch (project.id) {
      case 'blockrock':
        return (
          <div className="project-preview-mockup">
            <span className="preview-badge-category">{project.badge}</span>
            <div className="mockup-canvas">
              <div className="mockup-top-bar">
                <span className="mockup-circle" />
                <span className="mockup-circle" />
                <span className="mockup-circle" />
                <span style={{ fontSize: '0.7rem', color: '#666', marginLeft: 8 }}>blockrock.store/shop</span>
              </div>
              <div className="mockup-content-preview" style={{ flexDirection: 'column', gap: 6 }}>
                <ShoppingBag size={32} color="#FFD600" />
                <span style={{ fontSize: '0.78rem', color: '#eee', fontWeight: 600 }}>Django E-Commerce & Checkout Flow</span>
                <span style={{ fontSize: '0.7rem', color: '#888' }}>Catalog & order management</span>
              </div>
            </div>
          </div>
        );

      case 'desktop-notifier':
        return (
          <div className="project-preview-mockup">
            <span className="preview-badge-category">{project.badge}</span>
            <div className="mockup-canvas">
              <div className="mockup-top-bar">
                <span className="mockup-circle" />
                <span className="mockup-circle" />
                <span className="mockup-circle" />
                <span style={{ fontSize: '0.7rem', color: '#666', marginLeft: 8 }}>gui_notifier.py</span>
              </div>
              <div className="mockup-content-preview" style={{ flexDirection: 'column', gap: 6 }}>
                <Bell size={32} color="#FFD600" />
                <span style={{ fontSize: '0.78rem', color: '#eee', fontWeight: 600 }}>Desktop Notification System</span>
                <span style={{ fontSize: '0.7rem', color: '#888' }}>Tkinter GUI, sound alerts & scheduling</span>
              </div>
            </div>
          </div>
        );

      case 'selenium-google-search':
        return (
          <div className="project-preview-mockup">
            <span className="preview-badge-category">{project.badge}</span>
            <div className="mockup-canvas">
              <div className="mockup-top-bar">
                <span className="mockup-circle" />
                <span className="mockup-circle" />
                <span className="mockup-circle" />
                <span style={{ fontSize: '0.7rem', color: '#666', marginLeft: 8 }}>search.py / automation</span>
              </div>
              <div className="mockup-content-preview" style={{ flexDirection: 'column', gap: 6 }}>
                <Search size={32} color="#FFD600" />
                <span style={{ fontSize: '0.78rem', color: '#eee', fontWeight: 600 }}>Selenium Browser Automation</span>
                <span style={{ fontSize: '0.7rem', color: '#888' }}>Multi-browser search & automated screenshots</span>
              </div>
            </div>
          </div>
        );

      case 'portfolio':
      default:
        return (
          <div className="project-preview-mockup">
            <span className="preview-badge-category">{project.badge}</span>
            <div className="mockup-canvas">
              <div className="mockup-top-bar">
                <span className="mockup-circle" />
                <span className="mockup-circle" />
                <span className="mockup-circle" />
                <span style={{ fontSize: '0.7rem', color: '#666', marginLeft: 8 }}>ashishsahoo.dev</span>
              </div>
              <div className="mockup-content-preview" style={{ flexDirection: 'column', gap: 6 }}>
                <Laptop size={32} color="#FFD600" />
                <span style={{ fontSize: '0.78rem', color: '#eee', fontWeight: 600 }}>React + Vite Developer Portfolio</span>
                <span style={{ fontSize: '0.7rem', color: '#888' }}>High-performance dark & yellow theme</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">Portfolio Showcase</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A curated selection of practical web applications, concepts, and automation tools I have
            built to strengthen my real-world coding ability.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="skills-filter-bar" role="tablist" aria-label="Project Filters">
          {projectFilters.map((filter) => (
            <button
              key={filter.id}
              role="tab"
              aria-selected={activeFilter === filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Visual preview */}
              {renderProjectVisual(project)}

              {/* Card Body */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Key Highlights */}
                <div className="project-highlights-list">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="project-highlight-item">
                      <Check size={14} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="project-tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag tag-accent">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <a
                    href={project.githubUrl || personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    onClick={(e) => handleLinkClick(e, project, 'github')}
                  >
                    <Github size={16} />
                    <span>{project.isPlaceholderLink ? 'GitHub (Setup)' : 'GitHub Repo'}</span>
                  </a>

                  {project.id === 'portfolio' ? (
                    <a
                      href="#home"
                      className="btn btn-primary btn-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <span>Active Site</span>
                      <Check size={16} />
                    </a>
                  ) : project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target={project.liveIsPlaceholder ? '_self' : '_blank'}
                      rel={project.liveIsPlaceholder ? '' : 'noopener noreferrer'}
                      className="btn btn-outline btn-sm"
                      onClick={(e) => handleLinkClick(e, project, 'demo')}
                    >
                      <ExternalLink size={16} />
                      <span>{project.liveIsPlaceholder ? 'Live Demo (Setup)' : 'Live Demo'}</span>
                    </a>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      <ExternalLink size={16} />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Helper Modal for placeholder URLs */}
      <PlaceholderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={modalData}
      />
    </section>
  );
}
