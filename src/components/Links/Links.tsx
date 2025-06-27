import './Links.css';

const links = [
    {
        label: 'Website',
        url: 'https:/wandyland.com',
        icon: '/assets/icon.png',
    },
    {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/wcrohare/',
        icon: '/assets/icons/linkedin.svg',
    },
    {
        label: 'GitHub',
        url: 'https://github.com/WandaCrohare',
        icon: '/assets/icons/github.svg',
    },
    {
        label: 'Instagram',
        url: 'https://instagram.com/wandy.cro',
        icon: '/assets/icons/instagram.svg',
    },
    {
        label: 'Calendly',
        url: 'https://calendly.com/wandycro/15min',
        icon: '/assets/icons/calendly.svg',
    },
    {
        label: 'Email',
        url: 'mailto:wcrohare@gmail.com',
        icon: '/assets/icons/email.svg',
    },
    {
        label: 'WhatsApp',
        url: 'https://wa.me/+5493512930096',
        icon: '/assets/icons/whatsapp.svg',
    },
];

export function Links() {
  return (
    <section className="links-hero-bg">
      <div className="links-card">
        <h2 className="links-title">Wanda Croharé</h2>
        <ul className="links-list">
          {links.map(link => (
            <li key={link.label}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="links-btn">
                <img src={link.icon} alt={link.label} className="links-icon" />
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    {/* <form className="links-form" onSubmit={e => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const nombre = (form.elements.namedItem('nombre') as HTMLInputElement).value;
        const contacto = (form.elements.namedItem('contacto') as HTMLInputElement).value;
        const mensaje = (form.elements.namedItem('mensaje') as HTMLInputElement).value;
        const texto = encodeURIComponent(`Hola Wanda! Soy ${nombre}. Mi contacto es: ${contacto}. Mensaje: ${mensaje}`);
        window.open(`https://wa.me/5493512930096?text=${texto}`,'_blank');
      }}>
        <input name="nombre" type="text" placeholder="Tu nombre" required className="links-input" />
        <input name="contacto" type="text" placeholder="Teléfono o email" required className="links-input" />
        <textarea name="mensaje" placeholder="Tu mensaje" required className="links-input" rows={3} />
        <button type="submit" className="links-btn links-btn-send">Enviar a WhatsApp</button>
      </form> */}
    </section>
  );
}
