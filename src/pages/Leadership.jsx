import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import ArchCard from '../components/ArchCard';
import PhotoSlot from '../components/PhotoSlot';
import './Leadership.css';

const TEAM = [
  { name: 'Rev. Fr. Edward Kwaghtsule, CMF', role: 'Parish Priest', photoLabel: 'Fr. Edward Kwaghtsule, CMF', image: '/images/leadership/parish-priest.jpeg' },
  { id: 'pending-0', name: 'Name to be added', photoLabel: 'Image' },
  { id: 'pending-1', name: 'Name to be added', photoLabel: 'Image' },
  { id: 'pending-2', name: 'Name to be added', photoLabel: 'Image' },
  { id: 'pending-3', name: 'Name to be added', photoLabel: 'Image' },
  { id: 'pending-4', name: 'Name to be added', photoLabel: 'Image' },
  { id: 'pending-5', name: 'Name to be added', photoLabel: 'Image' },
  { id: 'pending-6', name: 'Name to be added', photoLabel: 'Image' },
];

export default function Leadership() {
  return (
    <>
      <PageHeader
        eyebrow="Shepherds & servants"
        title="Parish Leadership"
        blurb="From the Archdiocese to the parish council, meet those who guide and serve Our Lady of Grace."
      />

      <section className="section">
        <div className="container leader-featured">
          <Reveal className="leader-featured__photo">
            <PhotoSlot src="/images/leadership/archbishop-gabriel-abegunrin.jpg" portrait arch label="Most Rev. Gabriel Ojeleke Abegunrin, Archbishop of Ibadan" style={{ height: 330 }} />
          </Reveal>
          <Reveal>
            <div className="eyebrow-rule"><span>Our Archbishop</span></div>
            <h2>Most Rev. Gabriel Ojeleke Abegunrin</h2>
            <p className="leader-featured__role">Archbishop of Ibadan</p>
            <p>
              As our Local Ordinary, the Archbishop holds pastoral responsibility
              for every parish in the Archdiocese of Ibadan, including Our Lady of Grace.
              We remain united in prayer and obedience with him, and grateful
              for his guidance of our local Church.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="eyebrow-rule"><span>Parish leadership team</span></div>
            <h2>Clergy &amp; Parish Pastoral Council</h2>
            <p>
              Further leadership details will be added when confirmed.
            </p>
          </Reveal>
          <Reveal as="div" className="grid-3">
            {TEAM.map((t) => (
              <ArchCard key={t.id || t.name} title={t.name} meta={t.role} photoLabel={t.photoLabel} image={t.image}>{t.image && <p><a href="tel:+2348066006051">+234 806 600 6051</a><br /><a href="https://wa.me/2348066006051" target="_blank" rel="noreferrer">WhatsApp the parish priest</a></p>}</ArchCard>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container leader-note">
          <Reveal>
            <h2>Speak with our parish priest</h2><p>For parish enquiries, <a href="https://wa.me/2348066006051" target="_blank" rel="noreferrer">contact Rev. Fr. Edward Kwaghtsule, CMF on WhatsApp</a>.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
