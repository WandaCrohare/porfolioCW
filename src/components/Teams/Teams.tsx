import './Teams.css';
import { Tooling } from '../Tooling/Tooling';
import { useTranslation } from 'react-i18next';

export function Teams() {
  const { t } = useTranslation();
  return (
    <section className="teams-bg">
      <div className="teams-bg-overlay">
        <div className="teams-card">
          <div className="teams-card-content">
            <div className="teams teams-card-left">
              <div className="teams-titulos">
                <span className="teams-nombre">{t('teams.intro')}</span>
                <span className="teams-design">{t('header.about')}</span>
              </div>
              <p>{t('teams.about')}</p>
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
              <span className="teams-nombre-2">{t('teams.toolsTitle')}</span>
              <span className="teams-design-2">{t('teams.tools')}</span>
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