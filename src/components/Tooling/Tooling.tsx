import './Tooling.css';

export function Tooling() {
  return (
    <section className="card" style={{ maxWidth: 1200, margin: '3em auto', background: '#448944', borderRadius: '2em', padding: '2.5em 2em' }}>
      <h3 style={{ color: '#fff', textAlign: 'center', fontSize: '2.2rem', letterSpacing: '0.15em', marginBottom: '1.5em', fontFamily: 'monospace', textShadow: '0 2px 12px #222' }}>
        TOOLING
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2em', justifyItems: 'center' }}>
        <div style={{ background: '#181818', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em', minWidth: 200 }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{ width: 40, height: 40 }} />
          <span style={{ color: '#7ee787', fontFamily: 'monospace', fontSize: '1.5em' }}>React</span>
        </div>
        <div style={{ background: '#181818', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em', minWidth: 200 }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" style={{ width: 40, height: 40 }} />
          <span style={{ color: '#7ee787', fontFamily: 'monospace', fontSize: '1.5em' }}>Angular</span>
        </div>
        <div style={{ background: '#181818', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em', minWidth: 200 }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" style={{ width: 40, height: 40 }} />
          <span style={{ color: '#7ee787', fontFamily: 'monospace', fontSize: '1.5em' }}>Node</span>
        </div>
        <div style={{ background: '#181818', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em', minWidth: 200 }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" style={{ width: 40, height: 40 }} />
          <span style={{ color: '#7ee787', fontFamily: 'monospace', fontSize: '1.5em' }}>MongoDB</span>
        </div>
        <div style={{ background: '#181818', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em', minWidth: 200 }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript" style={{ width: 40, height: 40 }} />
          <span style={{ color: '#7ee787', fontFamily: 'monospace', fontSize: '1.5em' }}>Javascript</span>
        </div>
        <div style={{ background: '#181818', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em', minWidth: 200 }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" style={{ width: 40, height: 40 }} />
          <span style={{ color: '#7ee787', fontFamily: 'monospace', fontSize: '1.5em' }}>Figma</span>
        </div>
        <div style={{ background: '#181818', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em', minWidth: 200 }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" style={{ width: 40, height: 40 }} />
          <span style={{ color: '#7ee787', fontFamily: 'monospace', fontSize: '1.5em' }}>Sass</span>
        </div>
        <div style={{ background: '#181818', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em', minWidth: 200 }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="Typescript" style={{ width: 40, height: 40 }} />
          <span style={{ color: '#7ee787', fontFamily: 'monospace', fontSize: '1.5em' }}>Typescript</span>
        </div>
        <div style={{ background: '#181818', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em', minWidth: 200 }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" alt="Solidity" style={{ width: 40, height: 40 }} />
          <span style={{ color: '#7ee787', fontFamily: 'monospace', fontSize: '1.5em' }}>Solidity</span>
        </div>
        <div style={{ background: '#181818', borderRadius: '1em', padding: '2em', display: 'flex', alignItems: 'center', gap: '1em', minWidth: 200 }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/polygon/polygon-original.svg" alt="Polygon" style={{ width: 40, height: 40 }} />
          <span style={{ color: '#7ee787', fontFamily: 'monospace', fontSize: '1.5em' }}>Polygon</span>
        </div>
      </div>
    </section>
  );
}
