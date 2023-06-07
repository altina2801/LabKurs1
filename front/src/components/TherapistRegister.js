import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TherapistRegister = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post('/api/therapists', formData);
      console.log(response.data); // log the response data for debugging
      toast.success('Therapist registered successfully.');
      navigate('/'); // Navigate to a different route upon successful registration
    } catch (error) {
      console.error(error); // log any errors for debugging
      toast.error('Failed to register therapist. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2 className="the-register-name">Register</h2>
        <div className="input-field">
          <i className="fa fa-user"></i>
          <input
            type="text"
            placeholder="First and last name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <i className="fa fa-lock"></i>
          <input
            type="email"
            placeholder="Email"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default TherapistRegister;
