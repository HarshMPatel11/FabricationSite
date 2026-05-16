export default function About() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <section className="section">
      <div className="container">
        <h2>About IronForge</h2>
        <p className="lead">A family-owned fabrication shop with a 25-year track record across construction, energy, and industrial manufacturing.</p>
        <div className="grid grid-2">
          <div className="card">
            <h3>Our Mission</h3>
            <p>To deliver fabrication work that engineers, contractors, and OEMs can build their reputations on — every cut, every weld, every delivery.</p>
          </div>
          <div className="card">
            <h3>Our Shop</h3>
            <p>40,000 sq. ft. facility with CNC plasma, press brakes up to 250 tons, certified welders, and full QA inspection.</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn btn-primary" onClick={scrollToTop}>Back to Top</button>
        </div>
      </div>
    </section>
  );
}
