import './PageHeader.css';

export default function PageHeader({ eyebrow, title, blurb }) {
  return (
    <section className="page-header">
      <div className="container">
        {eyebrow && <div className="eyebrow-rule"><span>{eyebrow}</span></div>}
        <h1>{title}</h1>
        {blurb && <p>{blurb}</p>}
      </div>
    </section>
  );
}
