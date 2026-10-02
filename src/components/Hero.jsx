import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

// Building slides use the supplied proposed design and actual construction photographs.
const SLIDES = [
  { title: 'Our Lady of Grace Catholic Church, Ibadan', eyebrow: 'Welcome to our parish family', text: 'Gathered in faith. Growing in love. A place for you to belong.', label: 'Our Lady of Grace', image: '/images/hero/mary.jpg', action: 'Mass Times', to: '/mass-and-sacraments', detail: 'Sunday Mass · 10:30 AM' },
  { title: 'Together, we build a house of prayer', eyebrow: 'Our church building project', text: 'Help bring our vision for a new parish home to life. Every gift makes a difference.', label: 'Building our future', image: '/images/building/proposed-building.jpeg', action: 'Donate', to: '/donate', detail: 'Proposed design — our vision for the completed church' },
  { title: 'Our church is taking shape', eyebrow: 'Work in progress', text: 'See the real work underway as our parish community builds its future home.', label: 'Construction progress', image: '/images/building/progress-01.jpeg', action: 'View Progress', to: '/gallery', detail: 'Photographs from our building site' },
  { title: 'Come, let us worship together', eyebrow: 'Prayer at the heart of parish life', text: 'Join us for Holy Mass, receive the sacrament of Reconciliation, and spend time with the Lord.', label: 'Worship together', image: '/images/hero/altar.jpg', action: 'Explore Activities', to: '/activities', detail: 'Sunday Benediction · 6:00 PM' },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  const rotating = !paused && !hovered && !reducedMotion;
  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => setActive(value => (value + 1) % SLIDES.length), 6500);
    return () => window.clearInterval(timer);
  }, [rotating, active]);
  function select(index) {
    setActive((index + SLIDES.length) % SLIDES.length);
    setPaused(true);
  }
  const slide = SLIDES[active];
  return (
    <section className={`hero hero--${active}`} aria-label="Our parish highlights" aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setPaused(true)}>
      <div className="hero__backgrounds" aria-hidden="true">
        {SLIDES.map((item, index) => (
          <img key={item.image} src={item.image} alt="" className={index === active ? 'is-active' : ''}
            fetchPriority={index === 0 ? 'high' : 'auto'} decoding="async" />
        ))}
      </div>
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__layout" aria-live={rotating ? 'off' : 'polite'}>
        <div key={active} className="hero__slide" role="group" aria-roledescription="slide" aria-label={`${active + 1} of ${SLIDES.length}: ${slide.label}`}>
          <div className="hero__copy">
            <p className="hero__eyebrow">{slide.eyebrow}</p>
            {active === 0 ? <h1>{slide.title}</h1> : <h2>{slide.title}</h2>}
            <p className="hero__description">{slide.text}</p>
            <div className="hero__actions">
              <Link to={slide.to} className={slide.to === '/donate' ? 'donate-link' : 'btn btn--primary'}>{slide.action}</Link>
              <Link to={active === 1 ? '/about' : '/donate'} className={active === 1 ? 'btn btn--outline' : 'donate-link'}>{active === 1 ? 'Our Parish' : 'Donate'}</Link>
            </div>
            <p className="hero__detail"><span aria-hidden="true">✦</span> {slide.detail}</p>
          </div>
        </div>
      </div>
      <div className="container hero__controls">
        <div className="hero__selectors" aria-label="Choose a slide">
          {SLIDES.map((item, index) => <button key={item.label} type="button" onClick={() => select(index)} aria-label={`Show slide ${index + 1}: ${item.label}`} aria-current={index === active ? 'true' : undefined} className={index === active ? 'is-active' : ''}><span>{String(index + 1).padStart(2, '0')}</span></button>)}
        </div>
        <div className="hero__navigation">
          <button type="button" onClick={() => select(active - 1)} aria-label="Previous slide">←</button>
          {!reducedMotion && <button type="button" className="hero__pause" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Start automatic slides' : 'Pause automatic slides'}>{paused ? 'Play' : 'Pause'}</button>}
          <button type="button" onClick={() => select(active + 1)} aria-label="Next slide">→</button>
        </div>
      </div>
    </section>
  );
}
