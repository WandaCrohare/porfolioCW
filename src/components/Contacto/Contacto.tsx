import './Contacto.css';
import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function Contacto() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const visible = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
        const percent = visible / rect.height;
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
