import { useRef, useEffect, useState } from 'react';
import './Tooling.css';

export function Tooling() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      const grid = gridRef.current;
      if (!grid) return;
      const rect = grid.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.85) {
        setShow(true);
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll(); // por si ya está visible al cargar
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="card-tools">
      <div
        className={`grid-tooling${show ? ' grid-tooling--show' : ''}`}
        ref={gridRef}
      >
        <div style={{ background: '#111', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em'  }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript" style={{ width: 40, height: 40 }} />
          <span style={{ color: 'rgb(239 219 80)', fontFamily: 'monospace', fontSize: '1.5em' }}>Javascript</span>
        </div>
          <div style={{ background: '#111', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em'  }}>
          <img src="/assets/icons/icon-type.svg" alt="Typescript" style={{ width: 40, height: 40 }} />
          <span style={{ color: 'rgb(0 122 204)', fontFamily: 'monospace', fontSize: '1.5em' }}>Typescript</span>
        </div>
          <div style={{ background: '#111', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em'  }}>
          <img src="/assets/icons/icon-html.svg" alt="HTML" style={{ width: 40, height: 40 }} />
          <span style={{ color: 'rgb(240 101 42)', fontFamily: 'monospace', fontSize: '1.5em' }}>HTML5</span>
        </div>
          <div style={{ background: '#111', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em'  }}>
          <img src="/assets/icons/icon-css.svg" alt="CSS" style={{ width: 40, height: 40 }} />
          <span style={{ color: 'rgb(144 202 234)', fontFamily: 'monospace', fontSize: '1.5em' }}>CSS3</span>
        </div>
        <div style={{ background: '#111', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em'  }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{ width: 40, height: 40 }} />
          <span style={{ color: 'rgb(97 218 251)', fontFamily: 'monospace', fontSize: '1.5em' }}>React</span>
        </div>
        <div style={{ background: '#111', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em'  }}>
          <img src="/assets/icons/vite.svg" alt="Node" style={{ width: 40, height: 40 }} />
          <span style={{ color: 'rgb(190 53 255)', fontFamily: 'monospace', fontSize: '1.5em' }}>Vite</span>
        </div>        
        <div style={{ background: '#111', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em'  }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" style={{ width: 40, height: 40 }} />
          <span style={{ color: 'rgb(96 178 79)', fontFamily: 'monospace', fontSize: '1.5em' }}>MongoDB</span>
        </div>
        <div style={{ background: '#111', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em'  }}>
          <img src="/assets/icons/icon-firebase.svg" alt="Firebase" style={{ width: 40, height: 40 }} />
          <span style={{ color: 'rgb(255 202 39)', fontFamily: 'monospace', fontSize: '1.5em' }}>Firebase</span>
        </div>
         <div style={{ background: '#111', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em'  }}>
          <img src="/assets/icons/icon-ia.svg" alt="IA" style={{ width: 40, height: 40 }} />
          <span style={{ color: 'rgb(243 239 220)', fontFamily: 'monospace', fontSize: '1.5em' }}>IA</span>
        </div>
        <div style={{ background: '#111', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em'  }}>
          <img src="/assets/icons/icon-git.svg" alt="Git" style={{ width: 40, height: 40 }} />
          <span style={{ color: 'rgb(240 60 45)', fontFamily: 'monospace', fontSize: '1.5em' }}>Git</span>
        </div>
          <div style={{ background: '#111', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em'  }}>
          <img src="/assets/icons/icon-figma.svg" alt="Figma" style={{ width: 40, height: 40 }} />
          <span style={{ color: 'rgb(21 188 254)', fontFamily: 'monospace', fontSize: '1.5em' }}>Figma</span>
        </div>
        <div style={{ background: '#111', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em'  }}>
          <img src="/assets/icons/icon-blender.svg" alt="Blender" style={{ width: 40, height: 40 }} />
          <span style={{ color: 'rgb(255 152 4)', fontFamily: 'monospace', fontSize: '1.5em' }}>Blender</span>
        </div>
      </div>
      <img src="/assets/EXPLAIN.png" alt="Let's create" className='tooling-pic' />
    </section>
  );
}
