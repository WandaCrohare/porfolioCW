import { useEffect, useState } from 'react';
import './Hero.css';

const NOMBRE_ANIMADO = 'Hola! Soy Wanda';

export function Hero() {
  const [nombreAnimado, setNombreAnimado] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setNombreAnimado(NOMBRE_ANIMADO.slice(0, i + 1));
      i++;
      if (i === NOMBRE_ANIMADO.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-bg">
      <div className="blob-light1"></div>
      <div className="blob-light2"></div>
      <div className="hero-bg-overlay">
        <div className="hero-card">
          <div className="hero-card-content">
            <div className="hero-card-left">
              <span className="hero-nombre">{nombreAnimado}</span>
              <div className="hero-titulos">
                <span className="hero-design">DESIGNER</span>
                <span className='span-small'>&</span>
                <span className="hero-dev">DEV</span>
              </div>
            </div>
            <div className="hero-card-right">
              <div className="hero-bar"></div>
              <div className="hero-desc-text">
                <span>Hago cositas <br/> para la web ᢉ𐭩</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/assets/WANDY1.png" alt="Wanda Croharé" className="hero-me"/>
        </div>
      </div>
      <div className='social-glass'>
        <ul className='social-links'>
          <li>
          <a href="https://www.instagram.com/wandy.cro" aria-label="Instagram" target="_blank" rel="noreferrer">
            <img src="/assets/icons/instagram.svg" alt="Instagram" className="hero-icon"/>
          </a>
          </li>
          <li>
            <a href="https://github.com/WandaCrohare" aria-label="GitHub" target="_blank" rel="noreferrer">
              <img src="/assets/icons/github.svg" alt="GitHub" className="hero-icon"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/wcrohare/" aria-label="Linkedin" target="_blank" rel="noreferrer">
              <img src="/assets/icons/linkedin.svg" alt="Linkedin" className="hero-icon"/>
            </a>
          </li>
          <li>
            <a href="mailto:wcrohare@gmail.com" aria-label="Email" target="_blank" rel="noreferrer">
              <img src="/assets/icons/email.svg" alt="eMail" className="hero-icon"/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
