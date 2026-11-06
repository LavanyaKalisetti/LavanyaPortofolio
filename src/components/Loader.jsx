import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/*
  Cinematic intro
  1. Short words flash one after another (profile.intro in resources/portfolio.js)
  2. Light particles implode to the centre, the name's letters fly in from
     scattered positions and lock into place, then a shockwave and a light
     sweep pass over the name and the role appears
  3. Exit: the name zooms toward the viewer while the screen splits open
*/

const WORD_MS = 560;
const START_MS = 350;
const NAME_HOLD_MS = 2500;
const EASE_OUT = [0.16, 1, 0.3, 1];
const EASE_IN_OUT = [0.76, 0, 0.24, 1];

const rand = (min, max) => min + Math.random() * (max - min);

export default function Loader({ name, role, location, words = [], onDone }) {
  const reduce = useReducedMotion();
  const total = words.length;
  const [phase, setPhase] = useState(reduce ? total : -1);

  const [scatter] = useState(() =>
    name.split('').map(() => ({ x: rand(-480, 480), y: rand(-320, 320), r: rand(-160, 160), s: rand(0.2, 2.2) }))
  );
  const [particles] = useState(() =>
    Array.from({ length: 40 }, () => {
      const angle = rand(0, Math.PI * 2);
      const dist = rand(380, 900);
      return { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, d: rand(0, 0.35), size: rand(2, 5) };
    })
  );

  useEffect(() => {
    if (reduce) {
      const t = setTimeout(onDone, 1200);
      return () => clearTimeout(t);
    }
    const timers = [];
    for (let i = 0; i <= total; i++) timers.push(setTimeout(() => setPhase(i), START_MS + WORD_MS * i));
    timers.push(setTimeout(onDone, START_MS + WORD_MS * total + NAME_HOLD_MS));
    return () => timers.forEach(clearTimeout);
  }, [reduce, total, onDone]);

  const showName = phase >= total;
  const nameWords = name.split(' ');
  let letter = 0;

  return (
    <motion.div className="loader" initial="initial" animate="animate" exit="exit" role="status" aria-label={`${name}, ${role}`}>
      {/* split-screen panels */}
      <motion.div
        className="loader-panel top"
        variants={{ exit: { y: '-100%', transition: { duration: 1, ease: EASE_IN_OUT, delay: 0.3 } } }}
      />
      <motion.div
        className="loader-panel bottom"
        variants={{ exit: { y: '100%', transition: { duration: 1, ease: EASE_IN_OUT, delay: 0.3 } } }}
      />

      <motion.div className="loader-stage" variants={{ exit: { opacity: 0, transition: { duration: 0.5 } } }}>
        <div className="loader-grid" />
        <motion.div
          className="loader-orb"
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: showName ? 1.25 : 0.8, opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE_OUT }}
        />

        <motion.span
          className="loader-corner tl mono"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {name} — Portfolio
        </motion.span>
        {location && (
          <motion.span
            className="loader-corner br mono"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {location}
          </motion.span>
        )}
      </motion.div>

      <motion.div
        className="loader-content"
        variants={{ exit: { scale: 3.2, opacity: 0, filter: 'blur(14px)', transition: { duration: 0.75, ease: [0.7, 0, 0.84, 0] } } }}
      >
        <AnimatePresence mode="wait">
          {!showName && phase >= 0 && (
            <motion.h2
              key={phase}
              className="loader-flash"
              initial={{ opacity: 0, scale: 0.7, y: 30, filter: 'blur(14px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.35, y: -30, filter: 'blur(12px)' }}
              transition={{ duration: 0.24, ease: EASE_OUT }}
            >
              {words[phase]}
            </motion.h2>
          )}
        </AnimatePresence>

        {showName && (
          <>
            {!reduce &&
              particles.map((p, i) => (
                <motion.i
                  key={i}
                  className="loader-particle"
                  style={{ width: p.size, height: p.size }}
                  initial={{ x: p.x, y: p.y, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: [0, 1, 0] }}
                  transition={{ duration: 0.9, delay: p.d, ease: [0.55, 0, 0.9, 0.4] }}
                />
              ))}

            {!reduce &&
              [0, 0.18].map((d) => (
                <motion.span
                  key={d}
                  className="loader-shock"
                  initial={{ scale: 0, opacity: 0.9 }}
                  animate={{ scale: 9, opacity: 0 }}
                  transition={{ delay: 0.95 + d, duration: 1.4, ease: 'easeOut' }}
                />
              ))}

            <h1 className="loader-name">
              {nameWords.map((word, w) => (
                <span key={w} className={`loader-word ${w > 0 ? 'is-accent' : ''}`}>
                  {word.split('').map((ch) => {
                    const i = letter++;
                    const s = scatter[i + w] ?? scatter[0];
                    return (
                      <motion.span
                        key={i}
                        className="loader-letter"
                        initial={
                          reduce
                            ? { opacity: 0 }
                            : { x: s.x, y: s.y, rotate: s.r, scale: s.s, opacity: 0, filter: 'blur(14px)' }
                        }
                        animate={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.1, delay: 0.15 + i * 0.035, ease: EASE_OUT }}
                      >
                        {ch}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
              {!reduce && (
                <motion.span
                  className="loader-shine"
                  aria-hidden="true"
                  initial={{ x: '-120%' }}
                  animate={{ x: '120%' }}
                  transition={{ delay: 1.45, duration: 0.9, ease: 'easeInOut' }}
                />
              )}
            </h1>

            <div className="loader-role-row">
              <motion.span
                className="loader-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 0.9, ease: EASE_OUT }}
                style={{ originX: 1 }}
              />
              <motion.p
                className="loader-role mono"
                initial={{ opacity: 0, letterSpacing: '0.9em', filter: 'blur(6px)' }}
                animate={{ opacity: 1, letterSpacing: '0.3em', filter: 'blur(0px)' }}
                transition={{ delay: 1.2, duration: 1, ease: EASE_OUT }}
              >
                {role}
              </motion.p>
              <motion.span
                className="loader-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 0.9, ease: EASE_OUT }}
                style={{ originX: 0 }}
              />
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
