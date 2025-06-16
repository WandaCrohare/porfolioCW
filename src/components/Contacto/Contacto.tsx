import './Contacto.css';

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

export function Contacto() {
  return (
    <section id="contacto" className="card" style={{ maxWidth: 700, marginTop: '2em', textAlign: 'center' }}>
      <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>LET'S CONNECT</h3>
      <p style={{ fontSize: '1.1em' }}>
        I'M ALWAYS INTERESTED ABOUT UX/UI DESIGN FRONTEND DEVELOPMENT WEBFLOW DEVELOPMENT DIGITAL CONSULTANT WORDPRESS DEVELOPMENT NEW BUSINESSES STARTUPS PIZZA. ARE YOU MINDING A PROJECT? CONTACT ME
      </p>
      <div className="redes-sociales">
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
    </section>
  );
}
