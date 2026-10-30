import React, { useEffect } from 'react';
import { Info, X, ExternalLink, Code } from 'lucide-react';

/**
 * PlaceholderModal
 *
 * Ensures that clicking buttons for upcoming links provides a clear, helpful explanation
 * rather than leading to a broken 404 URL or doing nothing.
 */
export default function PlaceholderModal({ isOpen, onClose, data }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="modal-content-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="modal-header-icon">
          <Info size={24} />
        </div>

        <h3 id="modal-title" className="modal-title">
          {data.title || 'Project Link Placeholder'}
        </h3>

        <p className="modal-desc">
          {data.message ||
            'This project link is currently a placeholder. To link your live deployment or GitHub repository, update the file below:'}
        </p>

        <div className="modal-code-snippet">
          <Code size={14} style={{ display: 'inline', marginRight: 6 }} />
          {data.filePath || 'src/data/projects.js'}
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          {data.githubProfile && (
            <a
              href={data.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ flex: 1 }}
            >
              <ExternalLink size={14} />
              Visit Main GitHub
            </a>
          )}
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={onClose}
            style={{ flex: 1 }}
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}

