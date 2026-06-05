'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * A two-part custom cursor:
 *  - a small solid dot that tracks tightly
 *  - a larger ring that lags behind with springy motion
 * The ring grows when hovering interactive elements.
 * Renders only on devices with a fine pointer (skips touch).
 */
export default function CursorFollower() {
  const [enabled, setEnabled]   = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Dot: tight, near-instant
  const dotX = useSpring(x, { stiffness: 600, damping: 32, mass: 0.4 });
  const dotY = useSpring(y, { stiffness: 600, damping: 32, mass: 0.4 });

  // Ring: loose, visibly lags behind
  const ringX = useSpring(x, { stiffness: 110, damping: 16, mass: 0.7 });
  const ringY = useSpring(y, { stiffness: 110, damping: 16, mass: 0.7 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [data-cursor-hover]')) {
        setHovering(true);
      }
    };
    const out = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [data-cursor-hover]')) {
        setHovering(false);
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout', out);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mouseout', out);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Lagging ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x: ringX, y: ringY, mixBlendMode: 'difference' }}
      >
        <motion.div
          animate={{
            width:   hovering ? 56 : 32,
            height:  hovering ? 56 : 32,
            opacity: hovering ? 1 : 0.7,
          }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          style={{
            translateX: '-50%',
            translateY: '-50%',
            borderRadius: 9999,
            border: '1.5px solid #D4CDC4',
          }}
        />
      </motion.div>

      {/* Tight dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x: dotX, y: dotY, mixBlendMode: 'difference' }}
      >
        <motion.div
          animate={{ scale: hovering ? 0 : 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          style={{
            translateX: '-50%',
            translateY: '-50%',
            width: 6,
            height: 6,
            borderRadius: 9999,
            background: '#D4CDC4',
          }}
        />
      </motion.div>
    </>
  );
}
