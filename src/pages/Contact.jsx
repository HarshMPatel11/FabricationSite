import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(scrollToTop, 100);
  };

  return (
    <section className="section">
      <div className="container">
        <h2>Get in Touch</h2>
        <p className="lead">Send us your drawings or a quick description of what you need fabricated. We'll respond within one business day.</p>

        {sent ? (
          <div className="card" style={{ maxWidth: 540 }}>
            <h3>Thanks — message received.</h3>
            <p>Our estimating team will be in touch shortly.</p>
            <button className="btn btn-primary" onClick={() => setSent(false)} style={{ marginTop: '1rem' }}>
              Send another
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Email address" required />
            <input type="text" placeholder="Company" />
            <textarea placeholder="Describe your project..." required />
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        )}

        <div style={{ marginTop: '3rem', display: 'grid', gap: '0.5rem', color: 'var(--muted)' }}>
          <p><strong style={{ color: 'var(--text)' }}>Address:</strong> 4200 Industrial Pkwy, Houston, TX</p>
          <p><strong style={{ color: 'var(--text)' }}>Phone:</strong> (555) 123-4567</p>
          <p><strong style={{ color: 'var(--text)' }}>Email:</strong> info@ironforge.example</p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn btn-outline" onClick={scrollToTop}>Back to Top</button>
        </div>
      </div>
    </section>
  );
}
