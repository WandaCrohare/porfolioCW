import { useEffect, useRef, useState } from 'react';
import './About.css';

const SOBRE_MI_ANIMADO = 'Sobre Mi:';

export function About() {
  const [sobreMiAnimado, setSobreMiAnimado] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!spanRef.current || hasAnimated) return;
      const rect = spanRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        let i = 0;
        const interval = setInterval(() => {
          setSobreMiAnimado(SOBRE_MI_ANIMADO.slice(0, i + 1));
          i++;
          if (i === SOBRE_MI_ANIMADO.length) {
            clearInterval(interval);
            setHasAnimated(true);
          }
        }, 80);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Trigger on mount in case already visible
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  return (
    <section className="card-description">

          <div className='profile-picture-2'>
            <img src="/assets/me.jpeg" alt="Me" />
            <img src="/assets/stars.svg" alt="stars" className="profile-icon" />

            <span className="about-text">
              Si buscás una aliada para diseñar, desarrollar o escalar tu idea digital<br /> ¡Estoy para ayudarte!
            </span>
          </div>

          <div className='about-description'>
            <span className="about-nombre" ref={spanRef}>{sobreMiAnimado}</span>
            <p>
              Soy Wanda Croharé, desarrolladora web, diseñadora UX/UI y estratega digital. 
              <br />
              Con 14 años de experiencia, he trabajado con emprendedores y empresas para llevar sus ideas a la realidad.
              <br /> <br />
              Me gusta crear productos funcionales, claros y bien pensados para vos. Creo en la tecnología y el diseño con propósito. El poder de las buenas ideas!
              <br /> <br />
              También me gustan el café, los libros y el chocolate.
            </p>

            <button>Saber Más</button>
            
          </div>

    </section>
  );
}
