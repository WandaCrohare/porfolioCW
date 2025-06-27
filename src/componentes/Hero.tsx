import './Hero.css';

export function Hero() {
  return (
    <header className="hero">
      <h1>DESIGNER & DEVELOPER</h1>
      <h2>HELLO. I AM DAVID Patrick David</h2>
      <p>
        I USE MY PASSION AND SKILLS TO CREATE DIGITAL PRODUCTS AND EXPERIENCES. NATIONAL AND INTERNATIONAL CUSTOMERS RELY ON ME FOR DESIGN, IMPLEMENTATION, AND MANAGEMENT OF THEIR DIGITAL PRODUCTS. AS AN INDEPENDENT, I WORK ALSO WITH WEB AGENCIES, COMPANIES, STARTUPS AND INDIVIDUALS TO CREATE A BLUEPRINT FOR THE DIGITAL BUSINESS. ADVISOR AND PARTNER OF SOME DIGITAL AND FINTECH STARTUPS. ALSO, JUDGE AT CSSDA AND THE WEBBY.
      </p>
      <div style={{ margin: '2em 0' }}>
        <img src="/vite.svg" alt="Imagen principal" style={{ width: 120, borderRadius: '50%', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.15)' }} />
      </div>
    </header>
  );
}
