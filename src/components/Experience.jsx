import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiBriefcase, FiMapPin } from 'react-icons/fi';
import Section, { Reveal } from './Section';

export default function Experience({ items }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <Section id="experience" eyebrow="03 — Experience" title="Where I've worked">
      <div className="timeline" ref={ref}>
        <div className="timeline-line">
          <motion.span style={{ scaleY }} />
        </div>
        {items.map((job, i) => (
          <Reveal key={`${job.company}-${i}`} delay={0.05} className="timeline-item">
            <span className="timeline-dot">
              <FiBriefcase />
            </span>
            <div className="glass timeline-card">
              <div className="timeline-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">
                    {job.company}
                    {job.location && (
                      <span className="muted">
                        {' '}
                        · <FiMapPin /> {job.location}
                      </span>
                    )}
                  </p>
                </div>
                <span className="chip mono">{job.period}</span>
              </div>
              {job.description && <p className="muted">{job.description}</p>}
              {job.highlights?.length > 0 && (
                <ul className="highlights">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              {job.tech?.length > 0 && (
                <div className="tags">
                  {job.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
