import './Contacto.css';
import { useTranslation } from 'react-i18next';

export function Contacto() {
  const { t } = useTranslation();

  return (
    <section id="contacto" className="contact">
      <div className='card card-bg contact-card'>
        <h3 className="contact-title">{t('contact.title')}</h3>
        <p className="contact-desc">
          {t('contact.desc1')}
        </p>
        <span className="contact-question">{t('contact.question')}</span>
        <p className="contact-desc">{t('contact.desc2')}</p>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <a href="https://wa.me/5493512930096?text=Hola%20Wanda!%20Soy" className="contact-btn" target='_blank' rel='noopener noreferrer'>{t('contact.button')}</a>
        </div>
      </div>
    </section>
  );
}
