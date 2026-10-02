import { Link } from 'react-router-dom';
import './Footer.css';

const WHATSAPP = 'https://wa.me/2348066006051';
const EMAIL = 'mailto:admin@olgcc.org';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/images/parish-logo.png" className="parish-logo" alt="" width="72" height="72" />
          <h3>Our Lady of Grace</h3>
          <p>
            A parish family gathered around word and sacrament, currently
            building a new home for our growing congregation.
          </p>
          <div className="footer__social">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp">WhatsApp</a>
            <a href={EMAIL} aria-label="Email">Email</a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/leadership">Leadership</Link></li>
            <li><Link to="/mass-and-sacraments">Mass Times</Link></li>
            <li><Link to="/activities">Activities</Link></li>
          </ul>
        </div>

        <div>
          <h4>Building Project</h4>
          <p>
            We are raising funds to complete our new church building. Every
            gift brings us closer.
          </p>
          <Link to="/donate" className="donate-link" style={{ marginTop: 4 }}>
            Donate
          </Link>
        </div>

        <div>
          <h4>Visit &amp; Contact</h4>
          <p>14 Grace Avenue<br />Port Harcourt, Rivers State</p>
          <p>Parish Office: Mon&ndash;Fri, 9am&ndash;4pm</p>
          <p>Parish priest: <a href="tel:+2348066006051">+234 806 600 6051</a><br />office@olgcc.org</p>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>&copy; {new Date().getFullYear()} Our Lady of Grace Catholic Church, Ibadan</span>
        <span>Powered by <a href="https://sophajs.com" target="_blank" rel="noreferrer">Sophajs Global Tech</a></span>
      </div>
    </footer>
  );
}
