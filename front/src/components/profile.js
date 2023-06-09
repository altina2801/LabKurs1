import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "../css/TherapistProfile.css";

const Profile = () => {
  const { professionals_id } = useParams();
  const [therapist, setTherapist] = useState(null);

  useEffect(() => {
    fetch(`/api/therapists/${professionals_id}`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the response is an array with a single therapist object
        if (Array.isArray(data) && data.length > 0) {
          setTherapist(data[0]);
        } else {
          throw new Error('Therapist not found');
        }
      })
      .catch((error) => console.log(error));
  }, [professionals_id]);

  if (!therapist) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`profile-container profile-${professionals_id}`}>
      <h2 className="profile-heading">{therapist.name}'s Profile</h2>
      <p className="profile-info">Email: {therapist.email}</p>
      <p className="profile-info">Date of Birth: {therapist.date_of_birth}</p>
      <p className="profile-info">Gender: {therapist.gender}</p>
      <p className="profile-info">Resume: {therapist.resume}</p>
      <p className="profile-info">Certifications: {therapist.certifications}</p>
      {/* Render additional information as needed */}
      <Link to={`/profile/${professionals_id}/sessionForm?professionalId=${professionals_id}`} className="book-link">
  Book
</Link>
    </div>
  );
};

export default Profile;
