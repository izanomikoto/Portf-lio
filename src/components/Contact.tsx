import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-contact">
      <div className="glass contact-card">
        <h2 className="text-lore">Establish <span className="text-gradient-cyan">Connection</span></h2>
        <p>Ready to manifest the next vision.</p>
        <div className="contact-links">
          <a href="mailto:dev@shamayin.com" className="btn-contact">Email</a>
          <a href="https://github.com/izanomikoto" className="btn-contact">GitHub</a>
        </div>
      </div>

      <style>{`
        .section-contact {
          padding: 8rem 0;
          display: flex;
          justify-content: center;
        }
        .contact-card {
          padding: 4rem;
          text-align: center;
          width: 100%;
          max-width: 600px;
        }
        .contact-card h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .contact-card p {
          opacity: 0.6;
          margin-bottom: 2rem;
        }
        .contact-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        .btn-contact {
          padding: 1rem 2rem;
          border: 1px solid var(--color-glass-border);
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.7rem;
          transition: var(--transition-smooth);
        }
        .btn-contact:hover {
          border-color: var(--color-vilon);
          background: rgba(0, 212, 255, 0.05);
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Contact;
