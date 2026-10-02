import { MASS_ROWS, DEVOTION_ROWS, BAPTISM_DETAIL, WEDDING_DETAIL } from '../data/worship';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import ScheduleTable from '../components/ScheduleTable';
import './MassAndSacraments.css';

const SACRAMENTS = [
  {
    name: 'Baptism',
    detail: BAPTISM_DETAIL,
  },
  {
    name: 'Holy Communion',
    detail: 'First Holy Communion preparation runs through the school year for children in Primary 4 and above. Registration opens each September in the parish office.',
  },
  {
    name: 'Confirmation',
    detail: 'Confirmation classes are open to teenagers and adults who have received First Communion. Classes run on Saturdays; contact the parish office to register.',
  },
  {
    name: 'Reconciliation',
    detail: 'Confessions are heard on Saturdays immediately after the 7:00 AM Mass.',
  },
  {
    name: 'Matrimony',
    detail: WEDDING_DETAIL,
  },
  {
    name: 'Anointing of the Sick',
    detail: 'Available at any time for parishioners who are seriously ill, elderly, or preparing for surgery. Please call the parish office or rectory directly \u2014 day or night.',
  },
];

export default function MassAndSacraments() {
  return (
    <>
      <PageHeader
        eyebrow="Worship with us"
        title="Mass & the Sacraments"
        blurb="Every sacrament we celebrate is a moment of grace. Here is when and how to take part."
      />

      <section className="section">
        <div className="container mass-grid">
          <Reveal>
            <ScheduleTable
              title="Sunday & Weekday Mass"
              rows={MASS_ROWS}
            />
          </Reveal>
          <Reveal>
            <ScheduleTable
              title="Confessions & Benediction" rows={DEVOTION_ROWS}
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="eyebrow-rule"><span>The sacraments</span></div>
            <h2>Marking life&rsquo;s graces, together</h2>
          </Reveal>
          <Reveal className="sacrament-list">
            {SACRAMENTS.map((s) => (
              <div key={s.name} className="sacrament-list__item">
                <h3>{s.name}</h3>
                <p>{s.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
