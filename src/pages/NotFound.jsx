import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: '4rem' }}>404</h2>
        <p className="lead" style={{ margin: '0 auto 2rem' }}>The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">Back Home</Link>
      </div>
    </section>
  );
}
