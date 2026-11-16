'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Menu, X, MoveUpRight } from 'lucide-react';

const services = [
  { number: '01', title: 'System Development', category: 'Technology & Engineering', description: 'Digital systems, software, applications, and infrastructure designed to support operations and digital transformation.', glyph: '⌘' },
  { number: '02', title: 'Branding Development', category: 'Creative & Brand Strategy', description: 'Distinct brand identities, positioning, and communication systems that create a consistent, recognizable presence.', glyph: '✳' },
  { number: '03', title: 'Cyber Analysis', category: 'Cybersecurity & Intelligence', description: 'Digital environment evaluation, potential risk identification, and recommendations to strengthen security posture.', glyph: '◇' },
  { number: '04', title: 'Factory Consulting', category: 'Industrial & Operations', description: 'Industrial workflow and operational analysis to find opportunities for efficiency, improvement, and digitalization.', glyph: '▦' },
  { number: '05', title: 'Business Analysis', category: 'Business & Strategy', description: 'Business requirements, process evaluation, opportunity research, and strategic recommendations for informed decisions.', glyph: '↗' },
];

const steps = [
  ['01', 'Discover', 'Understand your objectives and challenges.'],
  ['02', 'Analyze', 'Evaluate existing conditions and opportunities.'],
  ['03', 'Strategize', 'Define the right solution and plan.'],
  ['04', 'Develop', 'Execute the agreed solution.'],
  ['05', 'Deliver', 'Test, document, and hand over the results.'],
  ['06', 'Improve', 'Identify what comes next.'],
];

function Logo() {
  return <span className="brand-image" role="img" aria-label="Teman Canggih logo" />;
}

function SectionLabel({ children, light = false }) {
  return <div className={`section-label ${light ? 'label-light' : ''}`}><span className="label-dot"/>{children}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) requestAnimationFrame(() => { setScrollY(window.scrollY); ticking = false; });
      ticking = true;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const progress = typeof document === 'undefined' ? 0 : scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

  return <>
    <div className="progress" style={{ transform: `scaleX(${progress})` }} />
    <header className={`site-header ${scrollY > 40 ? 'scrolled' : ''}`}>
      <a href="#top" className="header-logo" onClick={closeMenu}><Logo /></a>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#expertise" onClick={closeMenu}>Expertise</a>
        <a href="#contact" className="nav-contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
      </nav>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-content container">
          <div className="hero-copy" style={{ transform: `translateY(${Math.min(scrollY * .08, 38)}px)` }}>
            <div className="eyebrow hero-eyebrow"><span className="eyebrow-line"/> TECHNOLOGY & BUSINESS SOLUTIONS</div>
            <h1>Think Beyond.<br/><em>Build Better.</em></h1>
            <p>We turn complex challenges into purposeful solutions.</p>
            <div className="hero-actions"><a className="button button-primary" href="#expertise">Explore what we do <ArrowUpRight size={18}/></a></div>
          </div>
        </div>
      </section>

      <section id="about" className="intro section-pad">
        <div className="container intro-layout">
          <div className="reveal"><SectionLabel>01 / WHO WE ARE</SectionLabel><div className="intro-side-note">A different perspective<br/>changes everything.</div></div>
          <div className="intro-main reveal"><h2>Ideas are everywhere.<br/><span>Meaningful solutions</span><br/>make the difference.</h2><div className="intro-bottom"><p>Every challenge deserves more than an ordinary answer. We bring together technology, creativity, analytical thinking, and strategic perspectives to help businesses and organizations move forward with purpose.</p><a href="#philosophy" className="circle-arrow" aria-label="Explore our philosophy"><ArrowDown size={24}/></a></div></div>
        </div>
      </section>

      <section id="expertise" className="expertise section-pad">
        <div className="container">
          <div className="section-heading reveal"><div><SectionLabel light>02 / WHAT WE DO</SectionLabel><h2>Built around<br/><em>your challenge.</em></h2></div><p>Five connected practice areas. One shared commitment to solutions that fit your objectives.</p></div>
          <div className="services-layout">
            <div className="services-list">{services.map((s, i) => <button key={s.number} className={`service-row ${activeService === i ? 'active' : ''}`} onMouseEnter={() => setActiveService(i)} onFocus={() => setActiveService(i)} onClick={() => setActiveService(i)} aria-label={`View ${s.title}`}><span className="service-number">{s.number}</span><span className="service-title">{s.title}<small>{s.category}</small></span><ArrowUpRight className="service-arrow" size={24}/></button>)}</div>
            <div className="service-visual reveal" aria-live="polite"><div className="visual-top"><span>TC / CAPABILITY {services[activeService].number}</span><span>↗</span></div><div className="service-glyph" key={activeService}>{services[activeService].glyph}</div><div className="visual-bottom"><span>{services[activeService].category}</span><p>{services[activeService].description}</p></div></div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="philosophy section-pad"><div className="container philosophy-inner"><div className="reveal"><SectionLabel light>03 / OUR PHILOSOPHY</SectionLabel><h2>Beyond the<br/><span>expected.</span></h2></div><div className="philosophy-copy reveal"><div className="philosophy-line"><span>THINK BEYOND</span><p>Look past the immediate problem. Understand the bigger picture. Find the possibilities others might miss.</p></div><div className="philosophy-line"><span>BUILD BETTER</span><p>Turn insight into practical solutions designed to create real value and lasting progress.</p></div><p className="philosophy-quote">“Technology is a means to create meaningful progress.”</p></div></div></section>

      <section id="approach" className="approach section-pad"><div className="container"><div className="approach-heading reveal"><div><SectionLabel>04 / HOW WE WORK</SectionLabel><h2>Clarity at every<br/><em>step forward.</em></h2></div><p>Thoughtful work starts with understanding. Our process keeps the right questions, people, and outcomes in focus.</p></div><div className="steps-grid">{steps.map(([num,title,desc]) => <div className="step reveal" key={num}><span className="step-num">{num} / 06</span><div className="step-marker"><span/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>

      <section id="team" className="team section-pad"><div className="container"><div className="team-head reveal"><div><SectionLabel>05 / THE PEOPLE</SectionLabel><h2>People behind<br/><em>the thinking.</em></h2></div><p>A collaborative team across technology, creativity, security, and business analysis. We bring different strengths to a shared purpose.</p></div><div className="team-list reveal"><div><span>01</span><strong>Muhammad Syafiq</strong><small>CEO & Founder</small></div><div><span>02</span><strong>Nathan Chandra</strong><small>Co-Founder, COO & Project Manager</small></div><div><span>03</span><strong>Daffa Taufiq</strong><small>CTO</small></div></div><div className="team-foot reveal"><span>7–10 ACTIVE MEMBERS</span><p>Additional team profiles and responsibilities are being developed as our organization grows.</p></div></div></section>

      <section id="contact" className="contact section-pad"><div className="container contact-inner"><div className="reveal"><SectionLabel light>06 / LET'S COLLABORATE</SectionLabel><h2>Let's build better<br/><em>possibilities</em> together.</h2><p>Have a challenge worth solving? Tell us where you want to go. We’re ready to explore what’s possible with you.</p><a href="https://wa.me/6289508437967" target="_blank" rel="noopener noreferrer" className="button button-light">Start a conversation <ArrowUpRight size={20}/></a></div><div className="contact-bottom"><span>OPEN TO PROJECTS, CONSULTATION & COLLABORATION</span><span>SCROLL TO TOP <a href="#top" aria-label="Back to top"><ArrowUpRight size={18}/></a></span></div></div></section>
    </main>

    <footer className="footer"><div className="container"><div className="footer-main"><a href="#top"><Logo /></a><div><span>FIND US</span><a href="https://www.instagram.com/temancanggih_id/" target="_blank" rel="noopener noreferrer">Instagram <MoveUpRight size={15}/></a><a href="https://wa.me/6289508437967" target="_blank" rel="noopener noreferrer">WhatsApp <MoveUpRight size={15}/></a></div><div><span>EXPLORE</span><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#approach">Approach</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} TEMAN CANGGIH. ALL RIGHTS RESERVED.</span><span>THINK BEYOND. BUILD BETTER.</span></div></div></footer>
  </>;
}
