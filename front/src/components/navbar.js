import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, } from '@fortawesome/free-solid-svg-icons';
import { faSafari } from "@fortawesome/free-brands-svg-icons";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-heading navbar-item">Tranquillo</h1>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              <FontAwesomeIcon icon={faSafari} /> Browse
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/beforeRegister" className="navbar-link">
              <FontAwesomeIcon icon={faUser} /> My Account
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li className="navbar-item">
           <Link to="/beforeRegister" className="navbar-link navbar-btn">
            <FontAwesomeIcon icon={faUser} /> Join in
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/login.js" className="navbar-link navbar-btn">
         <FontAwesomeIcon icon={faUser} /> Log in
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;