import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import PhotoSlot from '../components/PhotoSlot';
import './Giving.css';

const WHATSAPP = 'https://wa.me/2348066006051?text=Hello%2C%20I%20would%20like%20to%20support%20the%20building%20project.';
const EMAIL = 'mailto:admin@olgcc.org?subject=Building%20Project%20Donation';

const WAYS = [
  { title: 'Building Project', text: 'Directly funds the ongoing construction of our new church building \u2014 our most urgent need right now.' },
  { title: 'Sunday Offertory', text: 'Given during the collection at every Mass, supporting the week-to-week life of the parish.' },
  { title: 'Tithes', text: 'A regular, proportionate gift of thanksgiving, given monthly.' },
  { title: 'Special Collections', text: 'Second collections for diocesan appeals, charitable causes, and seasonal needs.' },
];

export default function Giving() {
  return (
    <>
      <PageHeader
        eyebrow="An ongoing project"
        title="Donate & Support Our Building Project"
        blurb="We are building a new home for a growing parish family \u2014 and every gift, however small, brings that day closer."
      />

      <section className="section">
        <div className="container building-project">
          <Reveal>
            <PhotoSlot src="/images/building/progress-01.jpeg" arch label="Church building construction in progress" style={{ height: 360 }} />
          </Reveal>
          <Reveal className="building-project__info">
            <div className="eyebrow-rule"><span>Building update</span></div>
            <h2>Raising the walls of our new church</h2>
            <p>
              Our current chapel has served this parish faithfully for years,
              but our congregation has outgrown it. Construction on our new
              church building is underway, and we are trusting God \u2014
              and this parish family \u2014 to help us complete it.
            </p>
            <div className="progress-card">
              <div className="progress-meta">
                <span>Progress</span>
                <span>35%</span>
              </div>
              <div className="progress" role="progressbar" aria-label="Progress" aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress__fill" style={{ width: '35%' }} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="eyebrow-rule"><span>The vision</span></div>
            <h2>Our proposed church building</h2>
            <p>This architectural rendering shows the proposed finished design. The construction photographs below show the work currently in progress.</p>
            <figure className="project-figure">
              <span className="project-image-label">Proposed design</span>
              <a href="/images/building/proposed-building.jpeg" target="_blank" rel="noreferrer" aria-label="View the full proposed building design">
                <img src="/images/building/proposed-building.jpeg" alt="Proposed church design showing perspective, front and right-side elevations" width="1280" height="853" loading="lazy" />
              </a>
              <figcaption>Proposed building — perspective, front approach and right-side views.</figcaption>
            </figure>
            <figure className="project-figure project-figure--plan"><a href="/images/building/ground-floor-plan.jpeg" target="_blank" rel="noreferrer" aria-label="Open the ground floor plan"><img src="/images/building/ground-floor-plan.jpeg" alt="Proposed church ground floor plan" loading="lazy" /></a><figcaption>Ground floor plan — select to view in full.</figcaption></figure>
          </Reveal>
          <Reveal>
            <div className="eyebrow-rule"><span>Work in progress</span></div>
            <h2>From the building site</h2>
            <div className="progress-preview">
              {[1, 4, 8].map(number => <a key={number} href={`/images/building/progress-${String(number).padStart(2, '0')}.jpeg`} target="_blank" rel="noreferrer"><img src={`/images/building/progress-${String(number).padStart(2, '0')}.jpeg`} alt={`Church construction in progress, view ${number}`} width="1080" height="1080" loading="lazy" /></a>)}
            </div>
            <Link to="/gallery" className="btn btn--navy">See all construction photos &rarr;</Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container giving-layout">
          <Reveal>
            <div className="eyebrow-rule"><span>Ways to give</span></div>
            <h2>Support our parish</h2>
            {WAYS.map((w) => (
              <div key={w.title} className="giving-way">
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="giving-card">
            <h3>Make a gift</h3>
            <p>
              To keep giving simple and secure, donations are arranged
              directly with our Parish Administrator \u2014 reach out on
              WhatsApp or by email and we&rsquo;ll guide you through it.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn--whatsapp" style={{ width: '100%', justifyContent: 'center', marginBottom: 12 }}>
              Chat on WhatsApp
            </a>
            <a href={EMAIL} className="btn btn--outline" style={{ width: '100%', justifyContent: 'center', borderColor: 'rgba(255,255,255,0.3)' }}>
              Email the Parish Administrator
            </a>
            <p className="giving-card__note">
              You&rsquo;re also always welcome to give in person at the
              parish office or during the Sunday offertory.
            </p>
            <Link to="/contact" className="giving-card__link">Other ways to reach us &rarr;</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
