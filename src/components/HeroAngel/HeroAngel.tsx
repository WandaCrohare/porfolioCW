import { useEffect, useState } from 'react';
import './HeroAngel.css';

const NOMBRE_ANIMADO = 'Hola! Soy Wanda';

export function HeroAngel() {
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
    <section className="heroA-bg">
      <div className="blob-light1"></div>
      <div className="blob-light2"></div>
      <div className="heroA-bg-overlay">
        <div className="heroA-card">
          <div className="heroA-card-content">
            <div className="heroA-card-left">
              <span className="heroA-nombre">{nombreAnimado}</span>
              <div className="heroA-titulos">
                <span className="heroA-design">DESIGNER</span>
                <span className='span-small'>&</span>
                <span className="heroA-dev">DEV</span>
              </div>
            </div>
            <div className="heroA-card-right">
              <div className="heroA-bar"></div>
              <div className="heroA-desc-text">
                <span>Hago cositas <br/> para la web ᢉ𐭩</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='social-glass-2'>
        <ul className='social-links-2'>
          <li>
          <a href="https://www.instagram.com/wandy.cro" aria-label="Instagram" target="_blank" rel="noreferrer">
            <img src="/assets/icons/instagram.svg" alt="Instagram" className="heroA-icon"/>
          </a>
          </li>
          <li>
            <a href="https://github.com/WandaCrohare" aria-label="GitHub" target="_blank" rel="noreferrer">
              <img src="/assets/icons/github.svg" alt="GitHub" className="heroA-icon"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/wcrohare/" aria-label="Linkedin" target="_blank" rel="noreferrer">
              <img src="/assets/icons/linkedin.svg" alt="Linkedin" className="heroA-icon"/>
            </a>
          </li>
          <li>
            <a href="mailto:wcrohare@gmail.com" aria-label="Email" target="_blank" rel="noreferrer">
              <img src="/assets/icons/email.svg" alt="eMail" className="heroA-icon"/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
