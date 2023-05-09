import { Link } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
  return (
    <nav>
      <div>
        <ul id="navbar">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;