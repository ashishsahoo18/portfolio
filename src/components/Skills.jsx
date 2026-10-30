import React, { useState } from 'react';
import { skillCategories, skills } from '../data/skills';
import { Code, Server, Wrench, CheckCircle, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((item) => item.category === activeCategory);

  const getMonogram = (name) => {
    switch (name) {
      case 'HTML5':
        return '<H>';
      case 'CSS3':
        return '{C}';
      case 'JavaScript':
        return 'JS';
      case 'React':
        return 'Re';
      case 'Python':
        return 'Py';
      case 'Django':
        return 'Dj';
      case 'C++':
        return 'C++';
      case 'Git':
        return 'git';
      case 'GitHub':
        return 'gh';
      case 'VS Code':
        return 'VSC';
      default:
        return '</>';
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">Technical Capabilities</div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            An honest overview of technologies I am actively studying, practicing, and using
            in my daily coding projects.
          </p>
        </div>

        {/* Category Filters */}
        <div className="skills-filter-bar" role="tablist" aria-label="Skills Category Filters">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeCategory === category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => {
            const isLearning = skill.status === 'Currently Learning';
            return (
              <div key={skill.name} className="skill-card">
                <div className="skill-card-top">
                  <div className="skill-icon-wrap" aria-hidden="true">
                    {getMonogram(skill.name)}
                  </div>
                  <span
                    className={`skill-status-pill ${
                      isLearning ? 'learning' : 'familiar'
                    }`}
                  >
                    {isLearning ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                        <Sparkles size={11} />
                        Currently Learning
                      </span>
                    ) : (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                        <CheckCircle size={11} />
                        Familiar With
                      </span>
                    )}
                  </span>
                </div>

                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">{skill.description}</p>

                <div className="skill-card-footer">
                  <span>Level: {skill.level}</span>
                  <span style={{ textTransform: 'capitalize' }}>
                    {skill.category === 'tools' ? 'Workflow' : skill.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

