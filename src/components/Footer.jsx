export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} IronForge Fabrication. All rights reserved.</p>
        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Precision · Strength · Craftsmanship</p>
      </div>
    </footer>
  );
}
