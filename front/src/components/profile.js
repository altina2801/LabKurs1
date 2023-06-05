import React from 'react';
import '../css/profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1>
      </div>
      <div className="profile-content">
        <div className="profile-picture">
          <img src= {require('../images/therapist1.webp')} alt="Profile Picture" />
        </div>
        <div className="profile-details">
          <h2>John Doe</h2>
          <p>Therapist</p>
          <p>Specialization: Anxiety, Stress Management</p>
          <p>Location: New York City</p>
          <p>Years of Experience: 10</p>
          <p>About Me:</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vitae facilisis tellus, sed consectetur urna. Donec id lectus ut
            odio semper ultrices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
