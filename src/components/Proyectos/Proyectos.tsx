import './Proyectos.css';

export function Proyectos() {
  return (
    <section className="proyectos-hero-bg">
      <div className="proyectos-card">
        <div className="proyectos-card-content">
          <div className="proyectos-card-left">
            <div className="proyectos-titulos">
                <span className="proyectos-nombre">Entonces...</span>
              <span className="proyectos-design">¿Qué podés</span>
              <span className='proyectos-span-small'></span>
              <span className="proyectos-dev">hacer?</span>
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
            <strong className='title-1'>Diseño y desarrollo web a medida</strong>
            <p>Desde sitios institucionales hasta plataformas complejas: desarrollo frontend responsive, limpio y funcional, optimizado para todos los dispositivos.</p>
          </li>
          <li>
            <strong className='title-2'>UX/UI & prototipado</strong>
            <p>Diseño centrado en la experiencia del usuario: wireframes, prototipos interactivos, testeo de usabilidad y microinteracciones que encantan.</p>
          </li>
          <li>
            <strong className='title-3'>Consultoría en IA, diseño e innovación</strong>
            <p>Te ayudo a integrar inteligencia artificial, optimizar procesos o mejorar la experiencia digital de tu marca o producto.</p>
          </li>
          <li>
            <strong className='title-4'>Gestión de proyectos</strong>
            <p>Lidero equipos y proyectos digitales de punta a punta, aplicando metodologías ágiles para que todo fluya (y se entregue a tiempo).</p>
          </li>
          <li>
            <strong className='title-5'>Soluciones creativas para ideas únicas</strong>
            <p>¿Tenés un proyecto loco, artístico, técnico o imposible? Hablemos. Me encantan los desafíos.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
