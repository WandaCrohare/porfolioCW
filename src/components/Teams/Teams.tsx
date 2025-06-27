import './Teams.css';
import { Tooling } from '../Tooling/Tooling';

export function Teams() {

  return (
    <section className="teams-bg">
      <div className="teams-bg-overlay">
        <div className="teams-card">
          <div className="teams-card-content">
            <div className="teams teams-card-left">
              <div className="teams-titulos">
                <span className="teams-nombre">Ok, quién sos?</span>
                <span className="teams-design">ABOUT ME</span>
              </div>
              <p>
                Soy Wanda Croharé, desarrolladora web, diseñadora UX/UI y estratega digital. 
                <br />
                Con 14 años de experiencia, he trabajado con emprendedores y empresas para llevar sus ideas a la realidad.
                <br /> <br />
                Me gusta crear productos funcionales, claros y bien pensados para vos. Creo en la tecnología y el diseño con propósito. El poder de las buenas ideas!
                <br /> <br />
                También me gustan el café, los libros y el chocolate.
              </p>
              <div className='social-glass-2'>
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
              <div className='profile-picture'>
                  <img src="/assets/me.jpeg" alt="Me" />
                  <img src="/assets/stars.svg" alt="stars" className="profile-icon" />
              </div>
            </div>
            <div className="team-break-color"></div>
            <div className="teams-titulos-2">
                <span className="teams-nombre-2">Que herramientas usas?</span>
                <span className="teams-design-2">MY TOOLS</span>
            </div>
            <Tooling />
            {/* <div className="teams-titulos-2">
                <span className="teams-nombre-2">Porque en equipo se trabaja mejor!</span>
                <span className="teams-design-2">MY TEAMS</span>
            </div> */}
          </div>

        </div>

      </div>
    </section>
  );
}