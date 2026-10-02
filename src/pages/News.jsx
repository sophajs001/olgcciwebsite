import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import ArchCard from '../components/ArchCard';
import './News.css';

const EVENTS = [
  { title: 'First Friday Adoration', meta: 'Fri 3 Oct · 6:00pm – 7:00pm', photoLabel: 'Adoration', text: 'An hour of quiet Eucharistic adoration in the main church. All are welcome.' },
  { title: 'Parish Harvest & Thanksgiving', meta: 'Sun 12 Oct · after 10:30am Mass', photoLabel: 'Harvest Sunday', text: 'Our annual thanksgiving celebration with a shared meal in the parish hall.' },
  { title: 'Confirmation Class Begins', meta: 'Sat 18 Oct · 9:00am, Parish Hall', photoLabel: 'Confirmation', text: 'The first session of this year\u2019s Confirmation preparation programme.' },
  { title: 'Marriage Preparation Course', meta: 'Sat 25 Oct · 10:00am', photoLabel: 'Marriage Prep', text: 'A one-day course for couples preparing for the sacrament of matrimony.' },
  { title: 'All Souls\u2019 Day Mass', meta: 'Sat 1 Nov · 6:00pm', photoLabel: 'All Souls', text: 'A Mass offered for the faithful departed of our parish family.' },
  { title: 'Youth Retreat', meta: 'Fri 7 – Sun 9 Nov', photoLabel: 'Youth Retreat', text: 'A weekend retreat for our parish youth, held at the diocesan retreat centre.' },
];

const NOTICES = [
  'The parish office will be closed on public holidays; urgent sacramental needs should call the rectory line directly.',
  'Envelopes for the 2027 offertory year are now available for collection at the parish office.',
  'Choir rehearsal has moved to Thursdays at 6:00pm in the church, starting this week.',
];

export default function News() {
  return (
    <>
      <PageHeader
        eyebrow="Stay in touch"
        title="News & Events"
        blurb="What's happening this month across our parish family."
      />

      <section className="section">
        <div className="container">
          <Reveal as="div" className="grid-3">
            {EVENTS.map((e) => (
              <ArchCard key={e.title} title={e.title} meta={e.meta} photoLabel={e.photoLabel}>
                <p>{e.text}</p>
              </ArchCard>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container notices">
          <Reveal>
            <div className="eyebrow-rule"><span>Parish notices</span></div>
            <h2>From the bulletin</h2>
          </Reveal>
          <Reveal as="ul" className="notices__list">
            {NOTICES.map((n) => <li key={n}>{n}</li>)}
          </Reveal>
        </div>
      </section>
    </>
  );
}
