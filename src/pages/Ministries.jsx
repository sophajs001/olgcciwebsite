import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import ArchCard from '../components/ArchCard';

const GROUPS = [
  { title: 'Altar Servers', meta: 'Liturgical', photoLabel: 'Altar Servers', text: 'Young parishioners who assist at the altar during Mass and major liturgies.' },
  { title: 'Choir & Music Ministry', meta: 'Liturgical', photoLabel: 'Parish Choir', text: 'Leads worship in song at Sunday and feast day Masses. Rehearsals Thursdays, 6pm.' },
  { title: 'Legion of Mary', meta: 'Devotional', photoLabel: 'Legion of Mary', text: 'A Marian society dedicated to prayer and active works of charity in the parish.' },
  { title: 'Catholic Women\u2019s Organisation', meta: 'Society', photoLabel: 'CWO', text: 'Supports parish life, formation, and outreach for women of the parish.' },
  { title: 'Knights of St. Mulumba', meta: 'Society', photoLabel: 'Knights', text: 'A fraternal order of Catholic men committed to service and the defence of the faith.' },
  { title: 'Youth Ministry', meta: 'Formation', photoLabel: 'Parish Youth', text: 'Fellowship, formation, and service for teenagers and young adults.' },
  { title: 'St. Vincent de Paul Society', meta: 'Outreach', photoLabel: 'SVP Outreach', text: 'Reaches out to the poor and vulnerable within and beyond our parish boundaries.' },
  { title: 'Catechists', meta: 'Formation', photoLabel: 'Catechism Class', text: 'Prepares children and adults for the sacraments through weekly instruction.' },
];

export default function Ministries() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title="Parish Activities"
        blurb="Every ministry here is a way to serve, grow, and belong. There is a place for you in one of them."
      />

      <section className="section">
        <div className="container">
          <Reveal as="div" className="grid-3">
            {GROUPS.map((g) => (
              <ArchCard key={g.title} title={g.title} meta={g.meta} photoLabel={g.photoLabel}>
                <p>{g.text}</p>
              </ArchCard>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Not sure where you fit?</h2>
          <p style={{ margin: '0 auto 24px', maxWidth: '50ch' }}>
            Speak with any parish minister after Mass, or contact the parish
            office &mdash; we will help you find a ministry that matches your
            gifts.
          </p>
          <Link to="/contact" className="btn btn--primary">Contact the parish office</Link>
        </div>
      </section>
    </>
  );
}
