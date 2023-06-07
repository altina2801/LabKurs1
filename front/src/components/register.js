import { useNavigate } from 'react-router-dom';
import '../css/register.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(new URLSearchParams(formData));
    console.log(data); // log the form data
    
    try {
      const response = await axios.post('http://localhost:5000/api/register', data);
      console.log(response.data); // log the response data for debugging
      navigate('/userProfile');
    } catch (error) {
      console.error(error); // log any errors for debugging
      toast.error('Failed to register. Please try again.');
    }
  
  
  };
  

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2 className="the-register-name">Register</h2>
        <div className="input-field">
          <i className="fa fa-user"></i>
          <input type="text" placeholder="First and last name" name="name" required />
        </div>
        <div className="input-field">
          <i className="fa fa-lock"></i>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div className="input-field">
          <i className="fa fa-lock"></i>
          <input type="password" placeholder="Password" name="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
