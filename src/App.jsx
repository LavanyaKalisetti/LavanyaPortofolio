import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import data from '../resources/portfolio';
import Loader from './components/Loader';
import Background from './components/Background';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Venture from './components/Venture';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const has = (list) => Array.isArray(list) && list.length > 0;

export default function App() {
  const { profile } = data;
  const [loading, setLoading] = useState(true);
  const finishLoading = useCallback(() => setLoading(false), []);

  useEffect(() => {
    document.title = `${profile.name} · ${profile.roles?.[0] ?? 'Portfolio'}`;
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, [profile]);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
  }, [loading]);

  const sections = [
    { id: 'about', label: 'About', show: true },
    { id: 'skills', label: 'Skills', show: has(data.skills) },
    { id: 'experience', label: 'Experience', show: has(data.experience) },
    { id: 'projects', label: 'Projects', show: has(data.projects) },
    { id: 'venture', label: 'Venture', show: !!data.venture },
    { id: 'education', label: 'Education', show: has(data.education) || has(data.certifications) },
    { id: 'contact', label: 'Contact', show: true },
  ].filter((s) => s.show);

  return (
    <>
      <Background />
      <AnimatePresence>
        {loading && (
          <Loader
            key="loader"
            name={profile.name}
            role={profile.roles?.[0]}
            location={profile.location}
            words={profile.intro}
            onDone={finishLoading}
          />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <CursorGlow />
          <ScrollProgress />
          <Navbar name={profile.name} avatar={profile.avatar} sections={sections} />
          <main>
            <Hero profile={profile} socials={data.socials} />
            <About profile={profile} stats={data.stats} />
            {has(data.skills) && <Skills skills={data.skills} />}
            {has(data.experience) && <Experience items={data.experience} />}
            {has(data.projects) && <Projects projects={data.projects} />}
            {data.venture && <Venture venture={data.venture} />}
            {(has(data.education) || has(data.certifications)) && (
              <Education education={data.education} certifications={data.certifications} />
            )}
            <Contact profile={profile} contact={data.contact} socials={data.socials} />
          </main>
          <Footer name={profile.name} />
        </>
      )}
    </>
  );
}
