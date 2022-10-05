// import logo from '../images/kawaiiPC-logo.png';
import logo from '../images/plamera_mar.png';
// import logo from '../images/palmera.png';

import '../styles/components/Header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <a href="#bottom" title="¡Volver al inicio!" rel="noreferrer">
        <img src={logo} alt="Awesome profile-cards" className="imageAwesome" />
      </a>
    </header>
  );
};

export default Header;
