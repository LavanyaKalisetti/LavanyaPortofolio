import { motion } from 'framer-motion';
import { FiExternalLink, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Section, { Reveal } from './Section';

export default function Venture({ venture }) {
  const info = [
    venture.location && { icon: <FiMapPin />, value: venture.location },
    venture.phone && { icon: <FiPhone />, value: venture.phone, href: `tel:${venture.phone.replace(/\s/g, '')}` },
    venture.email && { icon: <FiMail />, value: venture.email, href: `mailto:${venture.email}` },
  ].filter(Boolean);

  return (
    <Section id="venture" eyebrow="05 — Venture" title="Beyond code" subtitle="The startup I'm building outside of software.">
      <div className="venture">
        <motion.div
          className="venture-media"
          initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
          whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {venture.image && <img src={venture.image} alt={`${venture.name} card`} loading="lazy" />}
          <span className="venture-glow" aria-hidden="true" />
        </motion.div>

        <div className="venture-body">
          <Reveal className="venture-badges">
            {venture.badge && <span className="chip gold">{venture.badge}</span>}
            {venture.role && <span className="chip gold-outline">{venture.role}</span>}
          </Reveal>
          <Reveal delay={0.05} as="h3" className="venture-name">
            {venture.name}
          </Reveal>
          {venture.tagline && (
            <Reveal delay={0.1} as="p" className="venture-tagline">
              {venture.tagline}
            </Reveal>
          )}
          {venture.motto && (
            <Reveal delay={0.15} as="blockquote" className="venture-motto">
              “{venture.motto}”
            </Reveal>
          )}
          {venture.description && (
            <Reveal delay={0.2} as="p" className="muted">
              {venture.description}
            </Reveal>
          )}
          <Reveal delay={0.25} className="venture-info">
            {info.map((row) =>
              row.href ? (
                <a key={row.value} href={row.href}>
                  {row.icon} {row.value}
                </a>
              ) : (
                <span key={row.value}>
                  {row.icon} {row.value}
                </span>
              )
            )}
          </Reveal>
          {venture.website && (
            <Reveal delay={0.3}>
              <a href={venture.website} target="_blank" rel="noreferrer" className="btn btn-gold">
                Visit {venture.name} <FiExternalLink />
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </Section>
  );
}
