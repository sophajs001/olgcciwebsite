import './ArchCard.css';

export default function ArchCard({ title, meta, children, photoLabel, image }) {
  return (
    <article className="arch-card lift">
      <div className={`arch-card__top arch ${image ? 'parish-photo parish-photo--portrait' : 'photo-slot'}`}>
        {image ? <img src={image} alt={photoLabel || title} loading="lazy" decoding="async" /> : <span>{photoLabel}</span>}
      </div>
      <div className="arch-card__body">
        {meta && <p className="arch-card__meta">{meta}</p>}
        <h3>{title}</h3>
        {children}
      </div>
    </article>
  );
}
