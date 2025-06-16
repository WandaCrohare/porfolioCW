import './Premios.css';

export function Premios() {
  return (
    <section className="card" style={{ maxWidth: 900, margin: '2em auto', textAlign: 'center' }}>
      <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        I AM HONORED TO WORK WITH SPECIAL PEOPLE & I win awards sometimes
      </h3>
      <p>69 awards won</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2em', justifyContent: 'center', margin: '2em 0' }}>
        <div className="card" style={{ minWidth: 200 }}>
          <strong>WEBSITE OF THE DAY</strong>
          <p>CSS DESIGN AWARDS<br />Beatrice Cortese Wines</p>
        </div>
        <div className="card" style={{ minWidth: 200 }}>
          <strong>DOTY SPECIAL KUDOS</strong>
          <p>Designer of the Year 2020</p>
        </div>
        <div className="card" style={{ minWidth: 200 }}>
          <strong>WEBSITE OF THE DAY</strong>
          <p>Bepatrickdavid v3</p>
        </div>
      </div>
    </section>
  );
}
