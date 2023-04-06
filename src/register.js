import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="register-container">
      <form>
        <h2 className="the-register-name">Register</h2>
        <div className="input-field">
          <i className="fa fa-user"></i>
          <input type="text" placeholder="First and last name" name="username" required />
        </div>
        <div className="input-field">
          <i className="fa fa-lock"></i>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div className="input-field">
          <i className="fa fa-lock"></i>
          <input type="password" placeholder="Password" name="password" required />
        </div>
        <div className="input-field">
          <i className="fa fa-lock"></i>
          <input type="password" placeholder="Confirm password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>

    </div>
  );
}

export default Register;