import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center', minHeight: '50vh' }}>
      <div className="container">
        <div className="eyebrow-rule" style={{ justifyContent: 'center' }}><span>Page not found</span></div>
        <h1>This page has wandered off</h1>
        <p style={{ margin: '0 auto 24px' }}>
          The page you're looking for doesn't exist. Let's get you back to
          familiar ground.
        </p>
        <Link to="/" className="btn btn--navy">Return home</Link>
      </div>
    </section>
  );
}
