import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <h2>{therapist.name}'s Profile</h2>
      <p>Email: {therapist.email}</p>
      <p>Date of Birth: {therapist.date_of_birth}</p>
      <p>Gender: {therapist.gender}</p>
      <p>Resume: {therapist.resume}</p>
      <p>Certifications: {therapist.certifications}</p>
      {/* Render additional information as needed */}
    </div>
  );
};

export default Profile;
