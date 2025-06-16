import './Proyectos.css';

export function Proyectos() {
  return (
    <section className="proyectos-section">
      <h3 className="proyectos-title">SELECTED CASES</h3>
      <div className="proyectos-grid">
        <div className="proyecto-card">
          <span className="proyecto-icon">🖼️</span>
          <strong>BARBARA SCERBO</strong>
          <p>UX/UI DESIGN, DEVELOPMENT</p>
          <a href="https://www.behance.net/gallery/172516677/Barbara-Scerbo-Portfolio-UXUI-Development" target="_blank" rel="noopener noreferrer">see case</a>
        </div>
        <div className="proyecto-card">
          <span className="proyecto-icon">🍇</span>
          <strong>BEATRICE CORTESE</strong>
          <p>UX/UI DESIGN, DEVELOPMENT</p>
          <a href="https://www.behance.net/gallery/154525501/Beatrice-Cortese-Winery-UXUI-Development" target="_blank" rel="noopener noreferrer">see case</a>
        </div>
        <div className="proyecto-card">
          <span className="proyecto-icon">💸</span>
          <strong>VICEVERSA</strong>
          <p>UX/UI DESIGN</p>
          <a href="https://www.behance.net/gallery/154272337/Viceversa-Financing-Dashboard" target="_blank" rel="noopener noreferrer">see case</a>
        </div>
        <div className="proyecto-card">
          <span className="proyecto-icon">💻</span>
          <strong>CODEWAY CH</strong>
          <p>UX/UI DESIGN, DEVELOPMENT</p>
          <a href="https://www.behance.net/gallery/154327159/Codeway-IT-Company-UX-UI-and-Development." target="_blank" rel="noopener noreferrer">see case</a>
        </div>
        <div className="proyecto-card">
          <span className="proyecto-icon">🎨</span>
          <strong>MIRANDA</strong>
          <p>UX/UI DESIGN, DEVELOPMENT</p>
          <a href="https://www.behance.net/gallery/130996655/Miranda-Biondi-Portfolio-UIUX-Website" target="_blank" rel="noopener noreferrer">see case</a>
        </div>
      </div>
    </section>
  );
}
