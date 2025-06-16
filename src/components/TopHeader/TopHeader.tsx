import './TopHeader.css';

const redes = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/tu_usuario',
    icon: '📸',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/tu_usuario',
    icon: '✈️',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tu_usuario',
    icon: '💼',
  },
  {
    name: 'Calendly',
    url: 'https://calendly.com/tu_usuario',
    icon: '📅',
  },
];

export function TopHeader() {
  return (
    <nav className="top-header">
      <div className="top-header__brand">
        <span>WANDA CROHARÉ</span>
        <span className="top-header__desc">Designer, Developer, IA, Solutions.</span>
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
              {r.icon}
            </a>
          ))}
        </div>
        <a href="#contacto" className="top-header__contact">Contact me</a>
      </div>
    </nav>
  );
}
