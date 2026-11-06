import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiZap } from 'react-icons/fi';
import Section, { Reveal } from './Section';

function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.8, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function About({ profile, stats = [] }) {
  const info = [
    profile.location && { icon: <FiMapPin />, label: 'Location', value: profile.location },
    profile.email && { icon: <FiMail />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    profile.phone && { icon: <FiPhone />, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
    profile.availability && { icon: <FiZap />, label: 'Status', value: profile.availability },
  ].filter(Boolean);

  return (
    <Section id="about" eyebrow="01 — About" title="A little about me">
      <div className="about-grid">
        <div className="about-bio">
          {profile.bio?.map((p, i) => (
            <Reveal key={i} delay={i * 0.1} as="p">
              {p}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="glass about-card">
          {info.map((row) => (
            <div key={row.label} className="info-row">
              <span className="info-icon">{row.icon}</span>
              <div>
                <span className="info-label">{row.label}</span>
                {row.href ? <a href={row.href}>{row.value}</a> : <span>{row.value}</span>}
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      {stats.length > 0 && (
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="glass stat">
              <span className="stat-value gradient-text">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="stat-label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
