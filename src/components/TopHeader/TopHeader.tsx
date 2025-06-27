import './TopHeader.css';
import { useTranslation } from 'react-i18next';

// Scroll handler
function handleNavClick(
	e: React.MouseEvent<HTMLAnchorElement>,
	url: string,
	scroll?: boolean
) {
	if (scroll && url.startsWith('#')) {
		e.preventDefault();
		const id = url.replace('#', '');
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	}
}

export function TopHeader() {
	const { t, i18n } = useTranslation();
	const changeLang = (lng: string) => i18n.changeLanguage(lng);
	return (
		<nav className="top-header">
			<div className="top-header__logo-container">
				<a href="/" className="top-header__logo-link">
					<img
						src="/assets/logo.png"
						alt="Wanda Croharé"
						className="top-header__logo"
					/>
				</a>
				<div className="top-header__brand">
					<span>WANDA CROHARÉ</span>
					<span className="top-header__desc">
						{t('header.subtitle')}
					</span>
				</div>
			</div>

			<div className="top-header__actions">
				<div className="lang-switcher">
					{i18n.language === 'es' ? (
						<button
							onClick={() => changeLang('en')}
							aria-label="English"
							className="lang-btn"
						>
							<img
								src="/assets/icons/eng.png"
								alt="English"
								width={24}
							/>
						</button>
					) : (
						<button
							onClick={() => changeLang('es')}
							aria-label="Español"
							className="lang-btn"
						>
							<img
								src="/assets/icons/esp.png"
								alt="Español"
								width={24}
							/>
						</button>
					)}
				</div>
				<div className="top-header__redes">
					<a
						href="#about"
						aria-label={t('header.about')}
						onClick={(e) => handleNavClick(e, '#about', true)}
					>
						{t('header.about')}
					</a>
					<a
						href="#services"
						aria-label={t('header.services')}
						onClick={(e) => handleNavClick(e, '#services', true)}
					>
						{t('header.services')}
					</a>
					<a
						href="#works"
						aria-label={t('header.works')}
						onClick={(e) => handleNavClick(e, '#works', true)}
					>
						{t('header.works')}
					</a>
					<a
						href="https://calendly.com/d/cs2h-5s3-p3m/15-minute-meeting"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={t('header.meeting')}
					>
						{t('header.meeting')}
					</a>
				</div>
				<a href="#contacto" className="top-header__contact">
					{t('header.contact')}
				</a>

			</div>

			<img src="/assets/clic.svg" alt="clic" className="clic-pic" />
		</nav>
	);
}
