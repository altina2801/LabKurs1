import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const SessionB = () => {
  const [sessions, setSessions] = useState([]);
  const [editingSession, setEditingSession] = useState(null); // Track the session being edited
  const [updatedSession, setUpdatedSession] = useState(null); // Track the changes made in the form

  const loadSessions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sessions');
      setSessions(response.data);
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while retrieving sessions');
    }
  };

  useEffect(() => {
    loadSessions();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('Name:', name);
    console.log('Value:', value);
    setUpdatedSession((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { session_id, professional_id, user_id, appointment_id, session_date, session_notes, session_rating } = editingSession;
    if (!professional_id || !user_id || !appointment_id || !session_date || !session_notes || !session_rating) {
      toast.error('Please provide a value for each input field');
    } else {
      const updatedData = {
        professional_id,
        user_id,
        appointment_id,
        session_date,
        session_notes,
        session_rating
      };
      updateSession(session_id, updatedData);
    }
  };
  
  

  const deleteSession = async (sessionId) => {
    try {
      if (window.confirm('Are you sure you want to delete this session?')) {
        await axios.delete(`http://localhost:5000/api/delete/sessions/${sessionId}`);
        toast.success('Session deleted successfully');
        loadSessions();
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while deleting the session');
    }
  };

  const editSession = (sessionId) => {
    const sessionToEdit = sessions.find((session) => session.session_id === sessionId);
    console.log('Session to edit:', sessionToEdit);
    setEditingSession(sessionToEdit);
    setUpdatedSession(sessionToEdit);
  };

  const updateSession = async (sessionId, updatedData) => {
    try {
      await axios.put(`http://localhost:5000/api/session/update/${sessionId}`, updatedData);
      toast.success('Session updated successfully');
      loadSessions();
      setEditingSession(null); // Reset editing session state
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while updating the session');
    }
  };
  

  const SessionEdit = ({ session }) => (
    <div>
      <h2>Edit Session</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Professional ID:</label>
          <input type="text" name="professional_id" value={updatedSession?.professional_id || ''} onChange={handleInputChange} />
        </div>
        <div>
          <label>User ID:</label>
          <input type="text" name="user_id" value={updatedSession?.user_id || ''} onChange={handleInputChange} />
        </div>
        <div>
          <label>Appointment ID:</label>
          <input type="text" name="appointment_id" value={updatedSession?.appointment_id || ''} onChange={handleInputChange} />
        </div>
        <div>
          <label>Session Date:</label>
          <input type="date" name="session_date" value={updatedSession?.session_date || ''} onChange={handleInputChange} />
        </div>
        <div>
          <label>Session Notes:</label>
          <input type="text" name="session_notes" value={updatedSession?.session_notes || ''} onChange={handleInputChange} />
        </div>
        <div>
          <label>Session Rating:</label>
          <input type="text" name="session_rating" value={updatedSession?.session_rating || ''} onChange={handleInputChange} />
        </div>
        <button type="submit">Update Session</button>
      </form>
    </div>
  );

  return (
    <div style={{ marginTop: '100px' }}>
      <div>
        <h2>Sessions</h2>
        <Link to="/sessions/create">
          <button>Create Session</button>
        </Link>

        <table>
          <thead>
            <tr>
              <th>Professional ID</th>
              <th>User ID</th>
              <th>Appointment ID</th>
              <th>Session Date</th>
              <th>Session Notes</th>
              <th>Session Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.session_id}>
                <td>{session.professional_id}</td>
                <td>{session.user_id}</td>
                <td>{session.appointment_id}</td>
                <td>{session.session_date}</td>
                <td>{session.session_notes}</td>
                <td>{session.session_rating}</td>
                <td>
                  <button onClick={() => editSession(session.session_id)}>Edit</button>
                  <button onClick={() => deleteSession(session.session_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingSession && <SessionEdit session={editingSession} />}
    </div>
  );
};

export default SessionB;

