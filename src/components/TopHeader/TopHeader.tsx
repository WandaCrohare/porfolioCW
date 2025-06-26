import './TopHeader.css';

const redes = [
  {
    name: 'About Me',
    url: '',
  },
  {
    name: 'What can I do?',
    url: '',
  },
  {
    name: 'Clients Say',
    url: '',
  },
  {
    name: 'Book a Meeting',
    url: 'https://calendly.com/d/cs2h-5s3-p3m/15-minute-meeting',
  },
];

export function TopHeader() {
  return (
    <nav className="top-header">
      
      <div className="top-header__logo-container">
        <a href="/" className="top-header__logo-link">
          <img src="src/assets/logo.png" alt="Wanda Croharé" className="top-header__logo" />
        </a>
        <div className="top-header__brand">
          <span>WANDA CROHARÉ</span>
          <span className="top-header__desc">Designer, Developer, IA, Solutions.</span>
        </div>
      </div>

      <div className="top-header__actions">
        <div className="top-header__redes">
          {redes.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={r.name}
            >
              {r.name}
            </a>
          ))}
        </div>
        <a href="#contacto" className="top-header__contact">Contact me</a>
      </div>
    </nav>
  );
}
