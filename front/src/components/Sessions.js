import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Session() {
  const [sessions, setSessions] = useState([]);
  const [sessionData, setSessionData] = useState({
    session_id: '',
    professional_id: '',
    user_id: '',
    appointment_id: '',
    session_date: '',
    session_notes: '',
    session_rating: '',
  });

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/sessions");
      setSessions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editSession = (session) => {
    setSessionData(session);
  };

  const saveSession = async () => {
    try {
      if (sessionData.session_id) {
        // If session ID exists, update the session
        await axios.put(`http://localhost:5000/api/sessions/${sessionData.session_id}`, sessionData);
      } else {
        // Otherwise, create a new session
        await axios.post('http://localhost:5000/api/sessions', sessionData);
      }
      fetchSessions();
      setSessionData({
        session_id: '',
        professional_id: '',
        user_id: '',
        appointment_id: '',
        session_date: '',
        session_notes: '',
        session_rating: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSession = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/sessions/${id}`);
      fetchSessions();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Session Manager</h1>
      <div>
        <h2>Create Session</h2>
        <div>
          <h2>{sessionData.session_id ? 'Update Session' : 'Create Session'}</h2>
          <input
            type="text"
            placeholder="Professional ID"
            value={sessionData.professional_id}
            onChange={(e) => setSessionData({ ...sessionData, professional_id: e.target.value })}
          />
          <input
            type="text"
            placeholder="User ID"
            value={sessionData.user_id}
            onChange={(e) => setSessionData({ ...sessionData, user_id: e.target.value })}
          />
          <input
            type="text"
            placeholder="Appointment ID"
            value={sessionData.appointment_id}
            onChange={(e) => setSessionData({ ...sessionData, appointment_id: e.target.value })}
          />
          <input
            type="date"
            placeholder="Session Date"
            value={sessionData.session_date}
            onChange={(e) => setSessionData({ ...sessionData, session_date: e.target.value })}
          />
          <input
            type="text"
            placeholder="Session Notes"
            value={sessionData.session_notes}
            onChange={(e) => setSessionData({ ...sessionData, session_notes: e.target.value })}
          />
          <input
            type="text"
            placeholder="Session Rating"
            value={sessionData.session_rating}
            onChange={(e) => setSessionData({ ...sessionData, session_rating: e.target.value })}
          />
          <button onClick={saveSession}>{sessionData.session_id ? 'Update' : 'Save'}</button>
        </div>
      </div>
      <div>
        <h2>Sessions</h2>
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
                  <button onClick={() => editSession(session)}>Edit</button>
                  <button onClick={() => deleteSession(session.session_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Session;
