import './Contacto.css';
import { useRef, useEffect } from 'react';

export function Contacto() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Si la sección está visible
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calcular cuánto del scroll está en la sección
        const visible = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
        const percent = visible / rect.height;
        // Escala de 1 a 1.1
        const scale = 1 + 0.1 * (1 - percent);
        section.style.backgroundSize = `${scale * 100}% auto`;
      } else {
        section.style.backgroundSize = '';
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contacto" className="contact" ref={sectionRef}>
      <div className='card card-bg contact-card'>
        <h3 className="contact-title">LET'S CONNECT</h3>
        <p className="contact-desc">
          Siempre estoy interesada en proyectos de diseño UX/UI, desarrollo frontend, Webdev, WordPress y consultoría digital.<br />
          Me entusiasman las ideas nuevas, los negocios que están por nacer!
        </p>
        <span className="contact-question">¿Tenés algo en mente?</span>
        <p className="contact-desc">Escribime y lo hacemos realidad.</p>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <a href="https://wa.me/5493512930096?text=Hola%20Wanda!%20Soy" className="contact-btn" target='_blank'>Contactar ahora</a>
        </div>
      </div>
    </section>
  );
}
