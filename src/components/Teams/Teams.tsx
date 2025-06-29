import './Teams.css';
import { Tooling } from '../Tooling/Tooling';
import { useTranslation } from 'react-i18next';

export function Teams() {
  const { t, i18n } = useTranslation();

  const handleSocialClick = (network: string) => {
    // @ts-ignore
    if (window.gtag) {
      // @ts-ignore
      window.gtag('event', 'click', {
        event_category: 'Redes Sociales',
        event_label: network,
      });
    }
  };

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
              <ul className='social-links-conect'>
                <li>
                  <a
                    href="https://www.linkedin.com/in/wcrohare/"
                    aria-label="Linkedin"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => handleSocialClick('LinkedIn')}
                  >
                    <img src="/assets/icons/linkedin.svg" alt="Linkedin" className="hero-icon"/>
                  </a>
                </li>
                <li>
                    <a
                    href={
                      i18n.language === 'es'
                      ? '/assets/files/CV-WANDA_CROHARE-ES-2025.pdf'
                      : '/assets/files/CV-WANDA_CROHARE-EN-2025.pdf'
                    }
                    aria-label="CV"
                    download
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => handleSocialClick('CV')}
                    >
                    <img
                      src="/assets/icons/cv.png"
                      alt="CV"
                      className="hero-icon"
                      style={{ height: 42, margin: '-1px 0 0 0' }}
                    />
                    </a>
                </li>
              </ul>
              <div className='profile-picture'>
                  <img src="/assets/me.jpeg" alt="Me" />
                  <img src="/assets/stars.svg" alt="stars" className="profile-icon" />
              </div>
            </div>
            <div className="team-break-color"></div>
            <div className="teams-titulos">
              <span className="teams-nombre">{t('teams.toolsTitle')}</span>
              <span className="teams-design teams-design-responsive">{t('teams.tools')}</span>
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