import { useState } from 'react';
import { FiArrowUpRight, FiCheck, FiCopy, FiDownload, FiMail, FiPhone } from 'react-icons/fi';
import Section, { Reveal } from './Section';
import { SocialIcon } from './Icons';

const prettyUrl = (url) =>
  url
    .replace(/^https?:\/\/(www\.)?/, '')
    .replace(/[?#].*$/, '')
    .replace(/\/$/, '');

function ContactCard({ card, index }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(card.copy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <Reveal delay={index * 0.08} className="glass contact-card">
      <span className="cc-icon">{card.icon}</span>
      <div className="cc-text">
        <span className="info-label">{card.label}</span>
        <a href={card.href} className="cc-main" {...(card.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
          {card.value}
        </a>
      </div>
      {card.copy ? (
        <button type="button" className="icon-btn cc-action" onClick={copy} aria-label={`Copy ${card.label}`} title="Copy">
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
      ) : (
        <span className="cc-action cc-arrow" aria-hidden="true">
          <FiArrowUpRight />
        </span>
      )}
    </Reveal>
  );
}

export default function Contact({ profile, contact = {}, socials = [] }) {
  const cards = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: <FiMail />, copy: profile.email },
    profile.phone && {
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
      icon: <FiPhone />,
      copy: profile.phone,
    },
    ...socials
      .filter((s) => s.icon !== 'email')
      .map((s) => ({ label: s.name, value: prettyUrl(s.url), href: s.url, icon: <SocialIcon icon={s.icon} />, external: true })),
  ].filter(Boolean);

  return (
    <Section id="contact" eyebrow="07 — Contact" title={contact.heading ?? 'Get in touch'} subtitle={contact.message}>
      <div className="contact-cards">
        {cards.map((card, i) => (
          <ContactCard key={card.label} card={card} index={i} />
        ))}
      </div>

      {profile.resume && (
        <Reveal delay={0.2} className="contact-cta">
          <div>
            <h3>{contact.ctaTitle ?? 'Want my resume?'}</h3>
            {contact.ctaText && <p className="muted">{contact.ctaText}</p>}
          </div>
          <div className="contact-cta-actions">
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-primary">
              Get my resume <FiDownload />
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost">
              Say hello <FiMail />
            </a>
          </div>
        </Reveal>
      )}
    </Section>
  );
}
