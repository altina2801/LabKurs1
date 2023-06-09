import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

function SessionForm({ userId, appointment_id }) {
  const { professionals_id } = useParams();
  const location = useLocation();
  const [professionalId, setProfessionalId] = useState(null);
  const [sessionDate, setSessionDate] = useState('');
  const [sessionNotes, setSessionNotes] = useState('');
  const [sessionRating, setSessionRating] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paramProfessionalId = searchParams.get('professionalId');

    if (paramProfessionalId) {
      setProfessionalId(paramProfessionalId);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new session object
    const newSession = {
      professional_id: professionalId,
      user_id: userId,
      appointment_id: appointment_id,
      session_date: sessionDate,
      session_notes: sessionNotes,
      session_rating: sessionRating,
    };

    // Call an API endpoint to save the session to the database
    // You can use axios or fetch to make the API request
    // Example using axios:
    axios
      .post('http://localhost:5000/api/sessions', newSession)
      .then((response) => {
        // Session saved successfully, perform any necessary actions
        console.log('Session saved:', response.data);
      })
      .catch((error) => {
        console.error('Error saving session:', error);
      });
  };

  return (
    <div>
      <h2>Session Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Session Date:
          <input
            type="datetime-local"
            value={sessionDate}
            onChange={(e) => setSessionDate(e.target.value)}
            required
          />
        </label>
        <label>
          Session Notes:
          <textarea
            value={sessionNotes}
            onChange={(e) => setSessionNotes(e.target.value)}
          />
        </label>
        <label>
          Session Rating:
          <input
            type="number"
            value={sessionRating}
            onChange={(e) => setSessionRating(parseInt(e.target.value))}
            min="0"
            max="5"
          />
        </label>
        <button type="submit">Save Session</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </form>
    </div>
  );
}

export default SessionForm;