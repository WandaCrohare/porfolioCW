import './Hero.css';

export function Hero() {
  return (
    <section >

      <div className="hero">
        <div className='hero-right'>
          <h2>Hola! Soy Wanda Croharé</h2>
          <h1>DESIGNER</h1>
          <h2>&</h2> 
          <h1>DEVELOPER</h1>
          
        </div>
        
        <div className='hero-left'>
          <h2>Construyo cositas para la web.</h2>
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
