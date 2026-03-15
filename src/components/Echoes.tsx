import React from 'react';
import { motion } from 'framer-motion';

const Echoes: React.FC = () => {
  const skills = [
    { name: "React / Next.js", level: "Transcendent" },
    { name: "TypeScript / Node.js", level: "Master" },
    { name: "System Architecture", level: "Visionary" },
    { name: "UI Architecture", level: "Artist" },
    { name: "Unity / C#", level: "Adept" },
  ];

  return (
    <section id="stack" className="section-echoes">
      <h2 className="text-lore section-header">Echoes of <span className="text-gradient-gold">Mastery</span></h2>
      <div className="echoes-list">
        {skills.map((skill, i) => (
          <motion.div 
            key={skill.name}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="skill-item glass"
          >
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}</span>
            </div>
            <div className="skill-bar-bg">
              <motion.div 
                className="skill-bar-fill"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .section-echoes {
          padding: 8rem 0;
        }
        .echoes-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .skill-item {
          padding: 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .skill-name {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: #fff;
        }
        .skill-level {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-vilon);
          opacity: 0.8;
        }
        .skill-bar-bg {
          height: 2px;
          background: rgba(255,255,255,0.05);
          width: 100%;
          border-radius: 1px;
          position: relative;
        }
        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-vilon), #fff);
          box-shadow: 0 0 10px var(--color-vilon);
          border-radius: 1px;
        }
      `}</style>
    </section>
  );
};

export default Echoes;
