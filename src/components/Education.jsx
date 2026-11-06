import { FiAward, FiBookOpen, FiExternalLink } from 'react-icons/fi';
import Section, { Reveal } from './Section';

export default function Education({ education = [], certifications = [] }) {
  return (
    <Section id="education" eyebrow="06 — Education" title="Learning & credentials">
      <div className="edu-grid">
        {education.length > 0 && (
          <div className="edu-col">
            <h3 className="col-title">
              <FiBookOpen /> Education
            </h3>
            {education.map((e, i) => (
              <Reveal key={`${e.school}-${i}`} delay={i * 0.1} className="glass edu-card">
                <span className="chip mono">{e.period}</span>
                <h4>{e.degree}</h4>
                <p className="accent-text">{e.school}</p>
                {e.details && <p className="muted">{e.details}</p>}
              </Reveal>
            ))}
          </div>
        )}
        {certifications.length > 0 && (
          <div className="edu-col">
            <h3 className="col-title">
              <FiAward /> Certifications
            </h3>
            {certifications.map((c, i) => {
              const body = (
                <>
                  <div>
                    <h4>{c.name}</h4>
                    <p className="muted">
                      {c.issuer}
                      {c.year && ` · ${c.year}`}
                    </p>
                  </div>
                  {c.url && <FiExternalLink className="cert-link" />}
                </>
              );
              return (
                <Reveal key={`${c.name}-${i}`} delay={i * 0.1}>
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noreferrer" className="glass cert-card">
                      {body}
                    </a>
                  ) : (
                    <div className="glass cert-card">{body}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
}
