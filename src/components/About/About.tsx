import './About.css';

export function About() {
  return (
    <section className="card">
      <div className='hero-content'>
        <div className='hero-text'>
          <h1>Diseño y desarrollo web</h1>
          <h2>con propósito</h2>  
          <p>
            Me apasiona crear experiencias digitales que sean funcionales, accesibles y centradas en el usuario.
          </p>  
          <p>
            Con más de 10 años de experiencia, he trabajado con empresas y emprendedores para llevar sus ideas a la realidad.
          </p>    


          <p>
            Si buscás una aliada para diseñar, desarrollar o escalar tu idea digital, estoy para ayudarte!
          </p>
          <button>CONTACTO</button>
        </div>
      
        <div style={{ margin: '2em 0' }}>
          <img src="/vite.svg" alt="Imagen principal" style={{ width: 120, borderRadius: '50%', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.15)' }} />
        </div>
      </div>

      <div className='hero-description'>
        <p>
          Soy Wanda Croharé, desarrolladora web, diseñadora UX/UI y estratega digital. Trabajo con empresas, agencias y emprendedores de Argentina y otros países.
          <br />
          Me gusta crear productos funcionales, claros y bien pensados para vos. Me interesan la tecnología y el diseño con propósito. El poder de las buenas ideas!
          También me gustan el café, los libros y el chocolate.
        </p>
      </div>


    </section>
  );
}
