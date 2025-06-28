import './Works.css';
import { useTranslation } from 'react-i18next';

const proyectos = [
	{
		nombre: 'PALM DAO',
		subtitulo: 'UX/UI DESIGN & FRONTEND DEV',
		imagen: '/assets/works/palmdao.png',
		link: 'https://palmdao.app/',
	},  
  {
		nombre: 'EQUILIBRIUM',
		subtitulo: 'UX/UI DESIGN & FRONTEND DEV',
		imagen: '/assets/works/equlibrium.png',
		link: 'https://equilibriumbuilders.com/',
	},
  {
		nombre: 'SINDOS',
		subtitulo: 'UX/UI DESIGN',
		imagen: '/assets/works/sindos.png',
	},
  {
		nombre: 'PALM NETWORK',
		subtitulo: 'UX/UI DESIGN & FRONTEND DEV',
		imagen: '/assets/works/network.png',
		link: 'https://palm.network/',
	},
  {
		nombre: 'ARTISTS VALLEY',
		subtitulo: 'UX/UI DESIGN & FRONTEND DEV',
		imagen: '/assets/works/av.png',
	},
  {
		nombre: 'PALM FOUNDATION',
		subtitulo: 'FRONTEND DEV',
		imagen: '/assets/works/foundation.png',
		link: 'https://palmfdn.org/',
	}
];


export function Works() {
  const { t } = useTranslation();
  return (
    <section className="works-bg">
      <div className="works-bg-overlay">
        <div className="works-card">
          <div className="works-card-content">
            <div className="works-card-left">

              <div className="works-titulos">
                <span className="works-nombre">{t('works.intro')}</span>
                <span className="works-design">{t('works.title')}</span>
              </div>

            </div>
          </div>
        </div>
          <div className="works-grid">
            {proyectos.map((p) => (
              <a
                key={p.nombre}
                href={p.link}
                className="works-card-grid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  className="works-img-grid"
                />
                <div className="works-titulos-grid">
                  <span className="works-nombre-grid">{p.nombre}</span>
                  <p className="works-design-grid">{p.subtitulo}</p>
                </div>
              </a>
            ))}
          </div>

      </div>
      <div className="works-me">
        <img src="/assets/do.png" alt="Wanda Croharé" className="works-me"/>
      </div>
    </section>
  );
}