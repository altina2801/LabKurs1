import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Session = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    professional_id: '',
    user_id: '',
    appointment_id: '',
    session_date: '',
    session_notes: '',
    session_rating: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('HTTP Method:', 'POST');
    try {
      await axios.post('http://localhost:5000/api/sessions', formData);
      toast.success('Session created successfully');
      navigate('/SessionB');
    } catch (error) {
      console.error(error);
      toast.error('Failed to create session. Please try again.');
    }
  };

  return (
    <div>
      <h2>Create Session</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="professional_id">Professional ID</label>
        <input type="text" id="professional_id" name="professional_id" onChange={handleChange} required />

        <label htmlFor="user_id">User ID</label>
        <input type="text" id="user_id" name="user_id" onChange={handleChange} required />

        <label htmlFor="appointment_id">Appointment ID</label>
        <input type="text" id="appointment_id" name="appointment_id" onChange={handleChange} required />

        <label htmlFor="session_date">Session Date</label>
        <input type="date" id="session_date" name="session_date" onChange={handleChange} required />

        <label htmlFor="session_notes">Session Notes</label>
        <textarea id="session_notes" name="session_notes" onChange={handleChange} required />

        <label htmlFor="session_rating">Session Rating</label>
        <input type="text" id="session_rating" name="session_rating" onChange={handleChange} required />

        <button type="submit">Create Session</button>
      </form>
    </div>
  );
};

export default Session;
