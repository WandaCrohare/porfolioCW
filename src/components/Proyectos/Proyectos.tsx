import './Proyectos.css';
import { useTranslation } from 'react-i18next';

export function Proyectos() {
  const { t } = useTranslation();
  return (
    <section className="proyectos-hero-bg">
      <div className="proyectos-card">
        <div className="proyectos-card-content">
          <div className="proyectos-card-left">
            <div className="proyectos-titulos">
              <span className="proyectos-nombre">{t('proyectos.intro')}</span>
              <span className="proyectos-design">{t('header.services')}</span>
              <span className='proyectos-span-small'></span>
              <span className="proyectos-dev">{t('proyectos.dev')}</span>
            </div>
          </div>
          <div className="proyectos-card-right">
            <div className="proyectos-bar"></div>
            <div className="proyectos-desc-text">
              <img src="/assets/think.png" alt="Me" />
            </div>
          </div>
        </div>
        <ul className="proyectos-lista">
          <li>
            <strong className='title-1'>{t('proyectos.item1.title')}</strong>
            <p>{t('proyectos.item1.desc')}</p>
          </li>
          <li>
            <strong className='title-2'>{t('proyectos.item2.title')}</strong>
            <p>{t('proyectos.item2.desc')}</p>
          </li>
          <li>
            <strong className='title-3'>{t('proyectos.item3.title')}</strong>
            <p>{t('proyectos.item3.desc')}</p>
          </li>
          <li>
            <strong className='title-4'>{t('proyectos.item4.title')}</strong>
            <p>{t('proyectos.item4.desc')}</p>
          </li>
          <li>
            <strong className='title-5'>{t('proyectos.item5.title')}</strong>
            <p>{t('proyectos.item5.desc')}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
