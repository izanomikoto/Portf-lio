import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* The Core Spark (Literal/Immediate) */}
      <motion.div
        className="cursor-spark"
        style={{
          left: cursorX,
          top: cursorY,
        }}
      />
      
      {/* The Soul Aura (Spring delayed) */}
      <motion.div
        className="cursor-aura"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      />

      <style>{`
        .cursor-spark {
          position: fixed;
          width: 6px;
          height: 6px;
          background: var(--color-soul-spark);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px var(--color-soul-spark), 0 0 20px var(--color-vilon);
        }
        .cursor-aura {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(0, 212, 255, 0.3);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
