import { FiArrowUp } from 'react-icons/fi';

export default function Footer({ name }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="muted">
          Designed &amp; built by <span className="gradient-text">{name}</span> · © {new Date().getFullYear()}
        </p>
        <a href="#home" className="icon-btn" aria-label="Back to top">
          <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
