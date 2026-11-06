import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from './Section';
import { SkillIcon } from './Icons';

function SkillCard({ skill, index }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      layout
      className="skill-card"
      onMouseMove={onMove}
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.45, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className="skill-top">
        <div className="skill-icon">
          <SkillIcon name={skill.name} icon={skill.icon} invert={skill.invert} />
        </div>
        <div>
          <h3 className="skill-name">{skill.name}</h3>
          <span className="skill-cat">{skill.category}</span>
        </div>
      </div>
      {typeof skill.level === 'number' && (
        <div className="skill-bar" aria-label={`${skill.level}%`}>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 + index * 0.03, ease: [0.22, 1, 0.36, 1] }}
          />
          <em>{skill.level}%</em>
        </div>
      )}
    </motion.div>
  );
}

export default function Skills({ skills }) {
  const [active, setActive] = useState('All');
  const all = useMemo(() => skills.flatMap((g) => g.items.map((s) => ({ ...s, category: g.category }))), [skills]);
  const tabs = ['All', ...skills.map((g) => g.category)];
  const shown = active === 'All' ? all : all.filter((s) => s.category === active);

  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="My tech toolbox"
      subtitle="Technologies and tools I use to bring ideas to life."
    >
      <div className="tabs" role="tablist">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={active === t} className={active === t ? 'active' : ''} onClick={() => setActive(t)}>
            {active === t && <motion.span layoutId="skill-tab" className="tab-pill" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
            <span>{t}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="skills-grid">
        <AnimatePresence mode="popLayout">
          {shown.map((s, i) => (
            <SkillCard key={`${s.category}-${s.name}`} skill={s} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
