const services = [
  { title: 'CNC Plasma & Laser Cutting', desc: 'Tight-tolerance cutting for plates up to 2 inches thick.' },
  { title: 'Press Brake Forming', desc: 'Forming services up to 250 tons, 12 ft capacity.' },
  { title: 'MIG / TIG Welding', desc: 'AWS-certified welders, all common alloys.' },
  { title: 'Structural Steel', desc: 'Beams, columns, stairs, and platforms.' },
  { title: 'Custom Industrial Equipment', desc: 'Conveyors, hoppers, skids, and machine guards.' },
  { title: 'Powder Coating & Finishing', desc: 'In-house blasting, painting, and powder coat lines.' },
];

export default function Services() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <section className="section">
      <div className="container">
        <h2>Services</h2>
        <p className="lead">End-to-end fabrication — from raw material to finished, inspected assemblies.</p>
        <div className="grid grid-3">
          {services.map(s => (
            <div key={s.title} className="card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn btn-primary" onClick={scrollToTop}>Back to Top</button>
        </div>
      </div>
    </section>
  );
}
