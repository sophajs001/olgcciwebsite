import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import PhotoSlot from '../components/PhotoSlot';
import './Contact.css';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="We'd love to hear from you"
        title="Contact & Visit"
        blurb="Reach the parish office, or plan your first visit to Our Lady of Grace."
      />

      <section className="section">
        <div className="container contact-layout">
          <Reveal className="contact-details">
            <h3>Parish Office</h3>
            <p>OUR LADY OF GRACE CATHOLIC CHURCH<br />POAT, Iyana Agbala<br />New Ife Road<br />Catholic Archdiocese of Ibadan<br />Oyo State, Nigeria</p>
            <p>Monday – Friday, 9:00am – 4:00pm</p>
            <p>office@olgcc.org</p>

            <h3>Parish Priest</h3>
            <p>Rev. Fr. Edward Kwaghtsule, CMF<br /><a href="tel:+2348066006051">+234 806 600 6051</a></p><a className="btn btn--navy" href="https://wa.me/2348066006051" target="_blank" rel="noreferrer">WhatsApp the parish priest</a>

            <div className="contact-map">
              <PhotoSlot label="Map / directions to the church" style={{ height: 220 }} />
            </div>
          </Reveal>

          <Reveal className="contact-form">
            {sent ? (
              <div className="contact-form__done">
                <h3>Message sent</h3>
                <p>Thank you for reaching out. Our parish office will respond within two working days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3>Send a message</h3>
                <label>
                  Full name
                  <input type="text" required />
                </label>
                <label>
                  Email
                  <input type="email" required />
                </label>
                <label>
                  Message
                  <textarea rows="5" required />
                </label>
                <button type="submit" className="btn btn--navy">Send message</button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
