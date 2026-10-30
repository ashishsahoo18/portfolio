import React from 'react';
import { whatIBuildData } from '../data/whatIBuild';
import { Layout, Sparkles, CheckSquare, ShoppingBag, Terminal, Check } from 'lucide-react';

export default function WhatIBuild() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout size={24} />;
      case 'Sparkles':
        return <Sparkles size={24} />;
      case 'CheckSquare':
        return <CheckSquare size={24} />;
      case 'ShoppingBag':
        return <ShoppingBag size={24} />;
      case 'Terminal':
        return <Terminal size={24} />;
      default:
        return <Layout size={24} />;
    }
  };

  return (
    <section id="goals" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">Engineering Interests</div>
          <h2 className="section-title">What I Want to Build</h2>
          <p className="section-subtitle">
            The types of software, interfaces, and practical tools I am passionate about crafting
            as I grow as a software engineer.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="what-i-build-grid">
          {whatIBuildData.map((goal) => (
            <div key={goal.id} className="build-goal-card">
              <div className="build-goal-icon-wrap" aria-hidden="true">
                {getIcon(goal.icon)}
              </div>

              <div className="build-goal-category">{goal.category}</div>
              <h3 className="build-goal-title">{goal.title}</h3>
              <p className="build-goal-desc">{goal.description}</p>

              <div className="build-focus-list">
                {goal.focusAreas.map((area, idx) => (
                  <div key={idx} className="build-focus-item">
                    <Check size={14} />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

