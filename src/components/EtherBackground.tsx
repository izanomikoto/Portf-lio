import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EtherBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <div className="ether-bg-fixed">
      <motion.div 
        style={{ y, opacity }}
        className="ether-bg-motion-container"
      >
        <div 
          className="ether-bg-image"
          style={{ backgroundImage: 'url("/ether_bg.png")' }}
        />
        <div className="ether-bg-overlay" />
      </motion.div>
      
      {/* Animated Glows */}
      <div className="glow glow-cyan" />
      <div className="glow glow-gold" />
      
      <style>{`
        .ether-bg-fixed {
          position: fixed;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          pointer-events: none;
          background: #000;
        }
        .ether-bg-motion-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 120%;
        }
        .ether-bg-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: grayscale(0.2) brightness(0.4);
        }
        .ether-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 50%, #000 100%);
        }
        .glow {
          position: absolute;
          width: 60%;
          height: 60%;
          filter: blur(120px);
          border-radius: 50%;
          opacity: 0.1;
          animation: pulse 8s infinite alternate ease-in-out;
        }
        .glow-cyan {
          top: 25%;
          left: -25%;
          background: var(--color-vilon);
        }
        .glow-gold {
          bottom: 25%;
          right: -25%;
          background: var(--color-zebul);
          animation-delay: 2s;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.05; }
          100% { transform: scale(1.1); opacity: 0.15; }
        }
      `}</style>
    </div>
  );
};

export default EtherBackground;
