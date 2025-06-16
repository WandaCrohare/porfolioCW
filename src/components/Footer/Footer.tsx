import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-built">Designed & Built by Wanda Croharé</p>
        <div className="footer-social">
          <span className="footer-icon" title="GitHub" style={{fontSize: '1.2em', marginRight: 8}}>☆</span>
          <span className="footer-number">7,909</span>
          <span className="footer-icon" title="Followers" style={{fontSize: '1.2em', margin: '0 8px'}}>⇩</span>
          <span className="footer-number">4,042</span>
        </div>
      </div>
    </footer>
  );
}
