import React from 'react';
import { motion } from 'framer-motion';

const Essence: React.FC = () => {
  return (
    <section id="about" className="section-essence">
      <div className="essence-content glass">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-lore section-title"
        >
          The <span className="text-gradient-cyan">Essence</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="essence-bio"
        >
          An architect of digital realms, born from the intersection of Hebrew mysticism and Asian precision. 
          I specialize in building modular, scalable, and aesthetically superior systems that transcend the 
          boundaries of standard web development.
        </motion.p>
        <div className="essence-stats">
          <div className="stat">
            <span className="stat-value">5+</span>
            <span className="stat-label">Years of Mastery</span>
          </div>
          <div className="stat">
            <span className="stat-value">30+</span>
            <span className="stat-label">Visions Built</span>
          </div>
        </div>
      </div>

      <style>{`
        .section-essence {
          padding: 8rem 0;
          display: flex;
          justify-content: center;
        }
        .essence-content {
          padding: 4rem;
          max-width: 800px;
          text-align: left;
          position: relative;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }
        .essence-bio {
          font-size: 1.2rem;
          line-height: 1.6;
          opacity: 0.8;
          margin-bottom: 3rem;
        }
        .essence-stats {
          display: flex;
          gap: 4rem;
        }
        .stat {
          display: flex;
          flex-direction: column;
        }
        .stat-value {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          color: var(--color-vilon);
          text-shadow: 0 0 10px var(--color-vilon);
        }
        .stat-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          opacity: 0.5;
        }
      `}</style>
    </section>
  );
};

export default Essence;
