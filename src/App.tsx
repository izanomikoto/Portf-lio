import React from 'react';
import EtherBackground from './components/EtherBackground';
import CustomCursor from './components/CustomCursor';
import Essence from './components/Essence';
import Echoes from './components/Echoes';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import { Trophy, Code2, User, Send } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="app-shell">
      <CustomCursor />
      <EtherBackground />
      
      {/* Floating HUD */}
      <nav className="glass ether-lens-hud">
        <div className="hud-logo text-lore">Shamayin Portfolio</div>
        <div className="hud-links">
          <a href="#about" className="hud-link"><User size={18} /><span>Essence</span></a>
          <a href="#projects" className="hud-link"><Trophy size={18} /><span>Visions</span></a>
          <a href="#stack" className="hud-link"><Code2 size={18} /><span>Echoes</span></a>
          <a href="#contact" className="hud-link"><Send size={18} /><span>Contact</span></a>
        </div>
      </nav>

      <main className="ether-lens-container">
        {/* Intro Section */}
        <section className="section-hero">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lore main-title"
          >
            Digital <span className="text-gradient-cyan">Architect</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="subtitle"
          >
            Crafting immersive realities through code and aesthetics.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hero-scroll-indicator"
          >
             <div className="mouse" />
          </motion.div>
        </section>

        <Essence />

        {/* Visions Section (Formerly Projects) */}
        <section id="projects" className="section-content">
          <h2 className="text-lore section-header">Active <span className="text-gradient-cyan">Visions</span></h2>
          <div className="visions-grid">
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass project-card"
            >
              <h3 className="text-lore">Shamayin Monorepo</h3>
              <p>High-fidelity system architecture for a Hebrew-Asian fusion RPG.</p>
              <div className="project-tags">
                <span>.NET 9</span>
                <span>Unity</span>
                <span>React</span>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass project-card"
            >
              <h3 className="text-lore">Aesthetic Protocol</h3>
              <p>Design system foundation for AAA-grade web experiences.</p>
              <div className="project-tags">
                <span>CSS</span>
                <span>Framer Motion</span>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass project-card"
            >
              <h3 className="text-lore">Zebul Nucleo</h3>
              <p>Distributed core for high-performance application state.</p>
              <div className="project-tags">
                <span>Node.js</span>
                <span>TypeScript</span>
              </div>
            </motion.div>
          </div>
        </section>

        <Echoes />
        <Contact />
      </main>

      <footer className="footer-shamayin text-lore">
        © 2026 Shamayin. Built with Soul.
      </footer>

      <style>{`
        .app-shell {
          position: relative;
        }
        .ether-lens-hud {
          position: fixed;
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 4rem);
          max-width: 1200px;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
        }
        .hud-logo {
          font-size: 1.2rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--color-vilon), #fff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hud-links {
          display: flex;
          gap: 2rem;
        }
        .hud-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-foreground);
          text-decoration: none;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.6;
          transition: var(--transition-smooth);
        }
        .hud-link:hover {
          opacity: 1;
          color: var(--color-vilon);
          text-shadow: 0 0 10px var(--color-vilon);
        }
        
        .section-hero {
          height: 90vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
        }
        .main-title {
          font-size: clamp(3rem, 10vw, 6rem);
          line-height: 1;
          margin-bottom: 1rem;
        }
        .subtitle {
          font-size: 1.2rem;
          opacity: 0.6;
          max-width: 600px;
        }
        .hero-scroll-indicator {
          position: absolute;
          bottom: 2rem;
          opacity: 0.4;
        }
        .mouse {
          width: 20px;
          height: 35px;
          border: 2px solid #fff;
          border-radius: 10px;
          position: relative;
        }
        .mouse::after {
          content: '';
          position: absolute;
          width: 4px;
          height: 6px;
          background: #fff;
          left: 50%;
          transform: translateX(-50%);
          top: 8px;
          border-radius: 2px;
          animation: scrollDown 2s infinite;
        }
        @keyframes scrollDown {
          0% { opacity: 0; transform: translate(-50%, 0); }
          50% { opacity: 1; transform: translate(-50%, 10px); }
          100% { opacity: 0; transform: translate(-50%, 15px); }
        }
        
        .section-content {
          padding: 8rem 0;
        }
        .section-header {
          font-size: 2.5rem;
          margin-bottom: 4rem;
          text-align: center;
        }
        .visions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .project-card {
          padding: 3rem;
          height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transition: var(--transition-smooth);
          cursor: pointer;
        }
        .project-card:hover {
          border-color: var(--color-vilon);
          box-shadow: 0 10px 40px rgba(0, 212, 255, 0.2);
        }
        .project-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .project-card p {
          font-size: 1rem;
          opacity: 0.7;
          margin-bottom: 2rem;
        }
        .project-tags {
          display: flex;
          gap: 1rem;
        }
        .project-tags span {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.4rem 0.8rem;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
        }
        
        .footer-shamayin {
          padding: 4rem;
          text-align: center;
          opacity: 0.3;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
        }

        @media (max-width: 768px) {
          .hud-link span {
            display: none;
          }
          .ether-lens-hud {
            top: 1rem;
            width: calc(100% - 2rem);
          }
          .visions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
