import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/mass-and-sacraments', label: 'Mass Times' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/activities', label: 'Activities' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
  { to: '/donate', label: 'Donate' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <img src="/images/parish-logo.png" className="parish-logo" alt="" width="54" height="54" />
          <span>
            Our Lady of Grace
            <em>Catholic Church, Ibadan</em>
          </span>
        </NavLink>

        <button
          className={`nav__toggle${open ? ' is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links${open ? ' is-open' : ''}`}>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => [isActive ? 'is-active' : '', l.to === '/donate' ? 'nav__donate' : ''].filter(Boolean).join(' ')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
