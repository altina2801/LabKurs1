import { Link } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
  return (
    <nav>
      <div>
        <ul id="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/registerB">Dashboard</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;