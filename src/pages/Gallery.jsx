import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import './Gallery.css';

const PHOTOS = Array.from({ length: 16 }, (_, index) => ({
  src: `/images/building/progress-${String(index + 1).padStart(2, '0')}.jpeg`,
  label: `Construction progress — view ${String(index + 1).padStart(2, '0')}`,
}));

export default function Gallery() {
  return (
    <>
      <PageHeader eyebrow="Building our parish home" title="Our Building Project in Pictures" blurb="Explore the proposed design and the real construction work taking place at our church." />
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow-rule"><span>The proposed building</span></div>
            <h2>A vision for our parish home</h2>
            <figure className="project-figure">
              <a href="/images/building/proposed-building.jpeg" target="_blank" rel="noreferrer" aria-label="Open the full proposed building design">
                <img src="/images/building/proposed-building.jpeg" alt="Architectural rendering of the proposed church, with perspective, front and right-side views" width="1280" height="853" loading="lazy" />
              </a>
              <figcaption>Proposed design — an architectural rendering, not a photograph of the completed building.</figcaption>
            </figure>
            <figure className="project-figure project-figure--plan"><a href="/images/building/ground-floor-plan.jpeg" target="_blank" rel="noreferrer" aria-label="Open the ground floor plan"><img src="/images/building/ground-floor-plan.jpeg" alt="Proposed church ground floor plan" loading="lazy" /></a><figcaption>Ground floor plan — select to view in full.</figcaption></figure>
          </Reveal>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="eyebrow-rule"><span>Work in progress</span></div>
            <h2>Real progress, one step at a time</h2>
            <p>Photographs from the church building site. Select a photograph to view it in full.</p>
          </Reveal>
          <Reveal as="div" className="gallery-grid">
            {PHOTOS.map(photo => (
              <figure key={photo.src} className="gallery-photo">
                <a href={photo.src} target="_blank" rel="noreferrer" aria-label={`View full photograph: ${photo.label}`}>
                  <img src={photo.src} alt={photo.label} width="1080" height="1080" loading="lazy" decoding="async" />
                </a>
                <figcaption>{photo.label}</figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
