import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import './Home.css';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="home-story">
        <section className="section home-origin">
          <div className="container home-origin__layout">
            <Reveal>
              <span className="home-kicker">Our Lady of Grace · Our story</span>
              <h2>A name that shapes<br /><em>the way we live.</em></h2>
            </Reveal>
            <Reveal>
              <p className="home-lead">Our Lady of Grace is more than the name above our doors. It is an invitation to receive God’s love and share it with others.</p>
              <p>Our name honours Mary, the mother of Jesus. Her openness to God and her care for others give us a quiet example for our own life together: to listen, to trust, and to make room for one another.</p>
              <div className="home-history"><h3>A story held by people</h3><p>The history of a parish lives in its people: in prayers passed from one generation to another, in friendships formed through worship, and in the hands that help prepare a place for others. As we build our parish home, we are also writing the next chapter of that shared story.</p></div>
            </Reveal>
          </div>
        </section>

        <section className="section home-belong">
          <div className="container home-belong__layout">
            <Reveal className="home-community-photo">
              <figure><img src="/images/building/worshiping-community.jpeg" alt="Members of the OLGCCI worshipping community gathered outside the church" width="1080" height="1080" loading="lazy" /><figcaption>Many lives. One family in faith.</figcaption></figure>
            </Reveal>
            <Reveal>
              <span className="home-kicker">A worshipping community</span>
              <h2>Love is how<br />we make room.</h2>
              <p className="home-lead">We want the welcome you receive at church to stay with you long after you leave.</p>
              <p>For the person arriving alone, the family settling into a new neighbourhood, or someone finding their way back to prayer, belonging can begin with a simple greeting.</p>
              <p>Our calling is to become a community where people are noticed, joys are shared, and difficult days need not be faced alone. Worship brings us together; care gives that togetherness meaning.</p>
            </Reveal>
          </div>
        </section>

        <section className="section home-shepherd">
          <div className="container home-shepherd__layout">
            <Reveal>
              <span className="home-kicker">A shepherd’s heart</span>
              <h2>To walk beside people.<br /><em>To care for the whole person.</em></h2>
              <p>Pastoral care begins with listening. It makes space for questions, accompanies people through change, and points us towards hope when the way ahead feels uncertain.</p>
              <p>For our parish priest, Rev. Fr. Edward Kwaghtsule, CMF, this is the calling at the heart of shepherding: helping people grow in faith while keeping the person, the family, and their everyday concerns in view.</p>
              <p className="home-shepherd__closing">A parish is strongest when care is something we all learn to give.</p>
            </Reveal>
            <Reveal className="home-priest-photo"><img src="/images/leadership/parish-priest.jpeg" alt="Rev. Fr. Edward Kwaghtsule, CMF" width="720" height="1031" loading="lazy" /><span>Rev. Fr. Edward Kwaghtsule, CMF</span></Reveal>
          </div>
        </section>

        <section className="section home-everyday">
          <div className="container">
            <Reveal><span className="home-kicker">Beyond the church doors</span><h2>Small acts. A living faith.</h2><p>The life we share on Sunday can shape the ordinary moments of the week.</p></Reveal>
            <div className="home-practices">
              <Reveal><span className="home-practice-number">01</span><h3>Notice someone</h3><p>Learn a new name. Make space beside you. A small welcome can turn a stranger into a familiar face.</p></Reveal>
              <Reveal><span className="home-practice-number">02</span><h3>Carry someone in prayer</h3><p>Remember a neighbour, a family, or someone going through a difficult season when you pause to pray.</p></Reveal>
              <Reveal><span className="home-practice-number">03</span><h3>Let kindness travel</h3><p>Take patience into your home, honesty into your work, and generosity into the encounters of your day.</p></Reveal>
            </div>
          </div>
        </section>

        <section className="section home-first-visit">
          <div className="container"><Reveal><span className="home-kicker">Your first Sunday with us</span><h2>You do not have to know everyone<br />to feel at home.</h2><p>Come as you are. When you arrive, introduce yourself to someone nearby and let them know it is your first visit. There is no need to have every answer before you begin.</p><Link className="btn btn--navy" to="/mass-and-sacraments">Find a time to join us <span aria-hidden="true">→</span></Link></Reveal></div>
        </section>
      </div>
    </>
  );
}
