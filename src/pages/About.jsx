import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import ArchCard from '../components/ArchCard';
import PhotoSlot from '../components/PhotoSlot';
import './About.css';

const CLERGY = [
  { name: 'Rev. Fr. Edward Kwaghtsule, CMF', role: 'Parish Priest', photoLabel: 'Fr. Edward Kwaghtsule, CMF', image: '/images/leadership/parish-priest.jpeg' },
  { id: 'pending-0', name: 'Name to be added', photoLabel: 'Image' },
  { id: 'pending-1', name: 'Name to be added', photoLabel: 'Image' },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="About Our Lady of Grace"
        blurb="A parish shaped by decades of faith, service, and the quiet, steady rhythm of the Mass."
      />

      <section className="section">
        <div className="container about-history">
          <Reveal className="about-history__photo">
            <PhotoSlot src="/images/building/worshiping-community.jpeg" arch label="OLGCCI worshiping community" style={{ height: 380 }} />
          </Reveal>
          <Reveal>
            <div className="eyebrow-rule"><span>Our story</span></div>
            <h2>Rooted in this neighbourhood, growing in grace</h2>
            <p>
              Our Lady of Grace was established to serve the growing Catholic
              community in this area, with a simple mission: to make the
              sacraments and the teaching of Christ available and welcoming
              to every family who walks through our doors.
            </p>
            <p>
              Over the years the parish has grown from a small gathering into
              a full community of ministries, societies, and outreach
              programmes &mdash; but the heart of what we do has never
              changed. Every week, we gather at one altar, hear one word, and
              are sent out to live it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="eyebrow-rule"><span>Our foundation</span></div>
            <h2>Mission &amp; vision</h2>
          </Reveal>
          <Reveal className="about-pillars">
            <div className="about-pillars__item">
              <h3>Mission</h3>
              <p>
                To form disciples of Jesus Christ through the sacraments,
                the Word, and a life of service &mdash; welcoming every
                person as a member of one parish family.
              </p>
            </div>
            <div className="about-pillars__item">
              <h3>Vision</h3>
              <p>
                A parish where faith is lived out daily: in our homes, our
                workplaces, and our care for the poor and forgotten in our
                community.
              </p>
            </div>
            <div className="about-pillars__item">
              <h3>Patroness</h3>
              <p>
                We entrust our parish to Our Lady of Grace, asking her
                constant intercession for every family who calls this
                church home.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow-rule"><span>Our clergy</span></div>
            <h2>Shepherds of this parish</h2>
          </Reveal>
          <Reveal as="div" className="grid-3" style={{ marginTop: 36 }}>
            {CLERGY.map((c) => (
              <ArchCard key={c.id || c.name} title={c.name} meta={c.role} photoLabel={c.photoLabel} image={c.image} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
