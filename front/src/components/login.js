import { useState } from 'react';
import '../css/login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user is logging in as a user or therapist
    const isUserLogin = e.target.name === 'userLogin';

    // Define the appropriate endpoint URL based on the login type
    const endpointURL = isUserLogin ? 'http://localhost:3000/user/login' : 'http://localhost:3000/user/login';


    axios
      .post(endpointURL, { email, password })
      .then((res) => {
        if (res.data.Login) {
          navigate('/');
        } else {
          alert('No record');
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2 className="the-login-name">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="input-field">
          <i className="fa fa-user"></i>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <i className="fa fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" name="userLogin">
          User Login
        </button>
        <button type="submit" name="therapistLogin">
          Therapist Login
        </button>
      </form>

      <div className="tranquillo-picture">
        <img src={require('../images/thefour.png')} alt="Tranquillo" />
      </div>
    </div>
  );
}

export default Login;
