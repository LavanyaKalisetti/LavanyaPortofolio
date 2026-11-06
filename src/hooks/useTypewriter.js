import { useEffect, useState } from 'react';

export default function useTypewriter(words = [], { typeSpeed = 75, deleteSpeed = 35, pause = 1700 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const full = words[index % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;
    let next;

    if (!deleting && text === full) {
      delay = pause;
      next = () => setDeleting(true);
    } else if (deleting && text === '') {
      delay = 300;
      next = () => {
        setDeleting(false);
        setIndex((i) => i + 1);
      };
    } else {
      next = () => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
    }

    const t = setTimeout(next, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
