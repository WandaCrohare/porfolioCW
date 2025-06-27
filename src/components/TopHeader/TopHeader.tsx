import './TopHeader.css';

const redes = [
	{
		name: 'About Me',
		url: '#about',
		scroll: true,
	},
	{
		name: 'What can I do?',
		url: '#services',
		scroll: true,
	},
	{
		name: 'My Works',
		url: '#works',
		scroll: true,
	},
	{
		name: 'Book a Meeting',
		url: 'https://calendly.com/d/cs2h-5s3-p3m/15-minute-meeting',
		scroll: false,
	},
];

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
						Designer, Developer, IA, Solutions.
					</span>
				</div>
			</div>

			<div className="top-header__actions">
				<div className="top-header__redes">
					{redes.map((r) => (
						<a
							key={r.name}
							href={r.url}
							target={r.scroll ? undefined : '_blank'}
							rel={r.scroll ? undefined : 'noopener noreferrer'}
							aria-label={r.name}
							onClick={
								r.scroll
									? (e) => handleNavClick(e, r.url, r.scroll)
									: undefined
							}
						>
							{r.name}
						</a>
					))}
				</div>
				<a href="https://wa.me/5493512930096?text=Hola%20Wanda!%20Soy" className="top-header__contact" target='_blank' rel='noopener noreferrer'>
					Contact me
				</a>
			</div>

			<img src="/assets/clic.svg" alt="clic" className="clic-pic" />
		</nav>
	);
}
