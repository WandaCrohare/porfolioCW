import './Footer.css';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-built">{t('footer.built')}</p>
      </div>
    </footer>
  );
}
