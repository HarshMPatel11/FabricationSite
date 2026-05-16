import { Link } from 'react-router-dom';

const services = [
  { icon: '⚙', title: 'CNC Machining', desc: 'Precision-cut components from steel, aluminum, and stainless alloys.' },
  { icon: '🔥', title: 'Welding & Assembly', desc: 'MIG, TIG and arc welding by certified industrial fabricators.' },
  { icon: '🏗', title: 'Structural Steel', desc: 'Custom beams, frames, and load-bearing assemblies for construction.' },
];

export default function Home() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Engineering <span>strength</span> into every weld.</h1>
          <p>IronForge is a full-service metal fabrication shop delivering precision components and structural assemblies for builders, manufacturers, and engineers.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
            <Link to="/services" className="btn btn-outline">Our Services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What we build</h2>
          <p className="lead">From single prototypes to production runs, our team delivers on tolerance, on time.</p>
          <div className="grid grid-3">
            {services.map(s => (
              <div key={s.title} className="card">
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="stats">
            <div className="stat"><div className="num">25+</div><div className="label">Years</div></div>
            <div className="stat"><div className="num">1,200+</div><div className="label">Projects</div></div>
            <div className="stat"><div className="num">98%</div><div className="label">On-time</div></div>
            <div className="stat"><div className="num">ISO</div><div className="label">Certified</div></div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button className="btn btn-outline" onClick={scrollToTop}>Back to Top</button>
          </div>
        </div>
      </section>
    </>
  );
}
