import '../css/login.css';

function Login() {
  return (
    <div className="login-container">
      <form>
        <h2 className="the-login-name">Login</h2>
        <div className="input-field">
          <i className="fa fa-user"></i>
          <input type="text" placeholder="Username" name="username" required />
        </div>
        <div className="input-field">
          <i className="fa fa-lock"></i>
          <input type="password" placeholder="Password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>

       
        <div className="tranquillo-picture"><img src={require('../images/thefour.png')}/>
        </div>
      
    </div>
  );
}

export default Login;
