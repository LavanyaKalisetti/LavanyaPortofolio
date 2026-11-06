import { useState } from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaDribbble,
  FaBehance,
  FaMedium,
  FaStackOverflow,
  FaFacebookF,
  FaEnvelope,
  FaGlobe,
} from 'react-icons/fa6';
import { SiLeetcode, SiHackerrank, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
  dribbble: FaDribbble,
  behance: FaBehance,
  medium: FaMedium,
  stackoverflow: FaStackOverflow,
  facebook: FaFacebookF,
  leetcode: SiLeetcode,
  hackerrank: SiHackerrank,
  codechef: SiCodechef,
  geeksforgeeks: SiGeeksforgeeks,
  email: FaEnvelope,
  website: FaGlobe,
};

export function SocialIcon({ icon }) {
  const Icon = SOCIAL_ICONS[icon?.toLowerCase()] ?? FaGlobe;
  return <Icon aria-hidden="true" />;
}

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons';

function iconSrc(icon) {
  if (!icon) return null;
  if (/^(https?:)?\/\//.test(icon) || icon.startsWith('/')) return icon;
  return `${DEVICON}/${icon}/${icon}-original.svg`;
}

export function SkillIcon({ name, icon, invert, size = 40 }) {
  const [failed, setFailed] = useState(false);
  const src = iconSrc(icon);

  if (!src || failed) {
    return (
      <span className="skill-fallback" style={{ width: size, height: size }}>
        {name.slice(0, 2)}
      </span>
    );
  }
  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      className={invert ? 'invert' : undefined}
      onError={() => setFailed(true)}
    />
  );
}
