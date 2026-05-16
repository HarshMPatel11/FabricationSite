const projects = [
  { title: 'Refinery Pipe Skid', tag: 'Energy', desc: 'Custom skid-mounted pipe assembly for a Gulf Coast refinery.' },
  { title: 'Warehouse Mezzanine', tag: 'Construction', desc: '18,000 sq ft structural steel mezzanine, fabricated and installed in 6 weeks.' },
  { title: 'Conveyor System', tag: 'Manufacturing', desc: 'Stainless food-grade conveyor frames for a packaging plant.' },
  { title: 'Architectural Staircase', tag: 'Commercial', desc: 'Feature staircase with mono-stringer and floating treads.' },
  { title: 'Equipment Skids', tag: 'Industrial', desc: 'Run of 24 powder-coated skids for OEM customer.' },
  { title: 'Bridge Components', tag: 'Infrastructure', desc: 'Pedestrian bridge railings and decking supports.' },
];

export default function Projects() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <section className="section">
      <div className="container">
        <h2>Selected Projects</h2>
        <p className="lead">A snapshot of recent work across industries.</p>
        <div className="grid grid-3">
          {projects.map(p => (
            <article key={p.title} className="project">
              <div className="project-img">{p.tag}</div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn btn-primary" onClick={scrollToTop}>Back to Top</button>
        </div>
      </div>
    </section>
  );
}
