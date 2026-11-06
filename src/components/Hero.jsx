import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi';
import useTypewriter from '../hooks/useTypewriter';
import { SocialIcon } from './Icons';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
};
const item = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const initialsOf = (name) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

function Avatar({ profile }) {
  const [flipped, setFlipped] = useState(false);
  const [touched, setTouched] = useState(false);
  const [bursts, setBursts] = useState([]);
  const first = profile.name.split(' ')[0];

  const onClick = () => {
    setFlipped((f) => !f);
    setTouched(true);
    const id = Date.now();
    setBursts((b) => [...b, id]);
    setTimeout(() => setBursts((b) => b.filter((x) => x !== id)), 1200);
  };

  return (
    <>
      <button type="button" className="avatar-wrap" onClick={onClick} aria-label="Flip profile picture" aria-pressed={flipped}>
        <span className="avatar-ring" aria-hidden="true" />
        {bursts.map((id) => (
          <span key={id} className="burst" aria-hidden="true">
            {Array.from({ length: 14 }, (_, i) => (
              <i key={i} style={{ '--a': `${i * (360 / 14)}deg`, '--d': `${(i % 3) * 18}px` }} />
            ))}
          </span>
        ))}
        <motion.span
          className="avatar-flip"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 12 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.94 }}
        >
          <span className="avatar-face front">
            {profile.avatar ? (
              <img src={profile.avatar} alt={profile.name} />
            ) : (
              <span className="avatar-initials">{initialsOf(profile.name)}</span>
            )}
          </span>
          <span className="avatar-face back">
            <span className="wave" aria-hidden="true">
              👋
            </span>
            <strong>Hi, I&apos;m {first}!</strong>
            <span>{profile.roles?.[0]}</span>
            {profile.location && (
              <small>
                <FiMapPin /> {profile.location}
              </small>
            )}
          </span>
        </motion.span>
      </button>

      <AnimatePresence>
        {!touched && (
          <motion.span
            className="click-hint mono"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            ✦ tap the photo
          </motion.span>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Hero({ profile, socials = [] }) {
  const role = useTypewriter(profile.roles);
  const [first, ...rest] = profile.name.split(' ');

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <motion.div className="hero-text" variants={container} initial="hidden" animate="show">
          {profile.availability && (
            <motion.div variants={item} className="badge">
              <span className="pulse" /> {profile.availability}
            </motion.div>
          )}

          <motion.p variants={item} className="hero-hello mono">
            Hello, I&apos;m
          </motion.p>

          <motion.h1 variants={item} className="hero-name">
            {first} <span className="gradient-text">{rest.join(' ')}</span>
          </motion.h1>

          <motion.p variants={item} className="hero-role">
            <span className="mono accent">&gt;</span> {role}
            <span className="caret" />
          </motion.p>

          <motion.p variants={item} className="hero-tagline">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View my work <FiArrowRight />
            </a>
            {profile.resume ? (
              <a href={profile.resume} className="btn btn-ghost" target="_blank" rel="noreferrer">
                Resume <FiDownload />
              </a>
            ) : (
              <a href="#contact" className="btn btn-ghost">
                Contact me
              </a>
            )}
          </motion.div>

          <motion.div variants={item} className="hero-meta">
            {profile.location && (
              <span className="muted">
                <FiMapPin /> {profile.location}
              </span>
            )}
            <div className="socials">
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name}>
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="orbit orbit-1" aria-hidden="true">
            <span />
          </div>
          <div className="orbit orbit-2" aria-hidden="true">
            <span />
          </div>
          <Avatar profile={profile} />
        </motion.div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
