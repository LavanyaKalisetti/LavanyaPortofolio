import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';
import Section from './Section';

function ProjectCard({ project, index }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--rx', `${-y * 10}deg`);
    el.style.setProperty('--ry', `${x * 10}deg`);
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  const onLeave = () => {
    ref.current.style.setProperty('--rx', '0deg');
    ref.current.style.setProperty('--ry', '0deg');
  };

  return (
    <motion.article
      layout
      className="project-wrap"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div ref={ref} className="project-card" onMouseMove={onMove} onMouseLeave={onLeave}>
        <header className="project-head" style={{ '--hue': (index * 67) % 360 }}>
          <span className="project-mono">
            {project.image ? (
              <img src={project.image} alt="" loading="lazy" />
            ) : (
              project.title
                .split(' ')
                .map((w) => w[0])
                .join('')
                .slice(0, 2)
            )}
          </span>
          <div className="project-head-text">
            <span className="eyebrow small">{[project.client, project.category].filter(Boolean).join(' · ')}</span>
            <h3>{project.title}</h3>
          </div>
          {project.featured && (
            <span className="featured" title="Featured">
              <FiStar />
            </span>
          )}
        </header>
        <div className="project-body">
          <div className="project-top">
            {project.role && <p className="project-role">{project.role}</p>}
            {project.period && <span className="chip mono">{project.period}</span>}
          </div>
          <p className="muted">{project.description}</p>
          <div className="tags">
            {project.tags?.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <FiGithub /> Code
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer">
                <FiExternalLink /> Live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects({ projects }) {
  const categories = ['All', ...new Set(projects.map((p) => p.category).filter(Boolean))];
  const [active, setActive] = useState('All');
  const shown = (active === 'All' ? projects : projects.filter((p) => p.category === active))
    .slice()
    .sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

  return (
    <Section id="projects" eyebrow="04 — Projects" title="Things I've built" subtitle="A selection of projects I'm proud of.">
      {categories.length > 2 && (
        <div className="tabs">
          {categories.map((c) => (
            <button key={c} className={active === c ? 'active' : ''} onClick={() => setActive(c)}>
              {active === c && <motion.span layoutId="project-tab" className="tab-pill" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
              <span>{c}</span>
            </button>
          ))}
        </div>
      )}
      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
