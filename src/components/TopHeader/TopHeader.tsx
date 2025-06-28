import './TopHeader.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

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
	const [menuOpen, setMenuOpen] = useState(false);
	const changeLang = (lng: string) => i18n.changeLanguage(lng);

	// Cierra el menú hamburguesa al navegar
	const handleMenuNav = (e: React.MouseEvent<HTMLAnchorElement>, url: string, scroll?: boolean) => {
		handleNavClick(e, url, scroll);
		setMenuOpen(false);
	};

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

				{/* Menú normal desktop */}
				<div className="top-header__redes top-header__nav-desktop">
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
						{t('header.h-services')}
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
				<a href="#contacto" className="top-header__contact top-header__nav-desktop">
					{t('header.contact')}
				</a>

				{/* Hamburguesa solo mobile */}
				<button
					className={`hamburger-btn${menuOpen ? ' open' : ''}`}
					onClick={() => setMenuOpen((v) => !v)}
					aria-label="Abrir menú"
				>
					<span className="hamburger-bar"></span>
					<span className="hamburger-bar"></span>
					<span className="hamburger-bar"></span>
				</button>

				{/* Menú hamburguesa desplegable */}
				{menuOpen && (
					<div className="mobile-menu">
						<a
							href="#about"
							onClick={(e) => handleMenuNav(e, '#about', true)}
						>
							{t('header.about')}
						</a>
						<a
							href="#services"
							onClick={(e) => handleMenuNav(e, '#services', true)}
						>
							{t('header.h-services')}
						</a>
						<a
							href="#works"
							onClick={(e) => handleMenuNav(e, '#works', true)}
						>
							{t('header.works')}
						</a>
						<a
							href="https://calendly.com/d/cs2h-5s3-p3m/15-minute-meeting"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => setMenuOpen(false)}
						>
							{t('header.meeting')}
						</a>
						<a
							href="#contacto"
							className="top-header__contact"
							onClick={(e) => handleMenuNav(e, '#contacto', true)}
						>
							{t('header.contact')}
						</a>
					</div>
				)}
			</div>

			<img src="/assets/clic.svg" alt="clic" className="clic-pic" />
		</nav>
	);
}
