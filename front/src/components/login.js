
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
      <div className="tranquillo-overview">
        <h2 className ="tranquillo-header">Tranquillo Overview</h2>
        <p className="tranquillo-text">Tranquillo is a mental health web application that allows therapists/psychologists to work online. Users can create a profile and pay for online therapy sessions with certified therapists. The application includes four roles: user, therapist/psychologist, administrator, and manager. Therapists set a price per hour for their services and users can schedule and pay for therapy sessions. The application also includes a form for users to provide information about their mental health issues to receive a better diagnosis.</p>
      </div>
    </div>
  );
}
export default Login;