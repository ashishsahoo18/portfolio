import React, { useState } from 'react';
import { Mail, Github, MapPin, Send, Copy, Check, Info, AlertCircle, Instagram, Twitter, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/config';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Hi Ashish,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.social.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">Get In Touch</div>
          <h2 className="section-title">Have an Idea? Let's Connect.</h2>
          <p className="section-subtitle">
            I am always eager to discuss software engineering, campus placement opportunities,
            or collaborative student projects.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Socials */}
          <div className="contact-info-col">
            <div className="contact-highlight-card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Direct Coordinates</h3>

              {/* GitHub */}
              <div className="contact-item-row">
                <div className="contact-item-icon">
                  <Github size={20} />
                </div>
                <div>
                  <div className="contact-item-label">GitHub Profile</div>
                  <div className="contact-item-val">
                    <a
                      href={personalInfo.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                    >
                      github.com/ashishsahoo18
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-item-row">
                <div className="contact-item-icon">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="contact-item-label">LinkedIn</div>
                  <div className="contact-item-val">
                    <a
                      href="https://www.linkedin.com/in/ashish-sahoo-630626411/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Twitter / X */}
              <div className="contact-item-row">
                <div className="contact-item-icon">
                  <Twitter size={20} />
                </div>
                <div>
                  <div className="contact-item-label">Twitter / X</div>
                  <div className="contact-item-val">
                    <a
                      href="https://twitter.com/AshishSahoo96922"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                    >
                      Twitter / X
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="contact-item-row">
                <div className="contact-item-icon">
                  <Instagram size={20} />
                </div>
                <div>
                  <div className="contact-item-label">Instagram</div>
                  <div className="contact-item-val">
                    <a
                      href="https://www.instagram.com/ashish_sahoo_18/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item-row">
                <div className="contact-item-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-val">
                    <a
                      href={`mailto:${personalInfo.social.email}`}
                      className="text-accent"
                    >
                      {personalInfo.social.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={handleCopyEmail}
                    title="Copy email address"
                  >
                    {copied ? <Check size={12} color="#27c93f" /> : <Copy size={12} />}
                    <span>{copied ? 'Copied to clipboard!' : 'Copy address'}</span>
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="contact-item-row">
                <div className="contact-item-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-val">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Info size={18} color="#FFD600" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: '0.85rem', color: '#A3A3A3', lineHeight: 1.5 }}>
                  <strong style={{ color: '#F5F5F5' }}>Privacy Note:</strong> In accordance with
                  honest portfolio guidelines, personal phone numbers and private credentials are
                  not exposed. Reach out via GitHub or through the configured email.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive UI Demonstration Form */}
          <div className="contact-form-card">
            {/* Transparent Demo Notice Bar */}
            <div className="demo-notice-bar">
              <Info size={18} style={{ flexShrink: 0 }} />
              <div>
                <strong>UI Demonstration Form:</strong> This form demonstrates client-side interaction.
                Messages can be routed via <code>mailto:</code> or hooked into Formspree / EmailJS.
              </div>
            </div>

            {formSubmitted ? (
              <div className="form-feedback-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#FFD600' }}>
                  <Check size={18} />
                  <strong>Ready to send via your email client!</strong>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#A3A3A3' }}>
                  Click the button below to launch your default mail app with your pre-filled message,
                  or reset to draft again.
                </p>
                <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={handleMailto}
                  >
                    <Send size={14} />
                    <span>Send via Mail Client</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Campus placement / Collaboration inquiry"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Ashish, I saw your portfolio and would like to discuss..."
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <Send size={16} />
                  <span>Prepare Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

