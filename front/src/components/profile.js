import React, { useState } from 'react';
import '../css/profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    name: 'John Doe',
    therapistType: 'Therapist',
    specialization: 'Anxiety, Stress Management',
    location: 'New York City',
    yearsOfExperience: 10,
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae facilisis tellus, sed consectetur urna. Donec id lectus ut odio semper ultrices.',
    profilePicture: require('../images/therapist1.webp'),
  });

  const specializationOptions = ['Anxiety', 'Stress Management', 'Depression', 'Relationship Issues', 'Self-esteem', 'Trauma'];

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save the updated profile information to the server
    // You can access the updated values from the profileInfo state
    console.log('Updated profile:', profileInfo);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileInfo((prevInfo) => ({ ...prevInfo, profilePicture: reader.result }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`profile-container ${isEditing ? 'editing' : ''}`}>
      <div className="profile-header">
        <h1>Profile</h1>
      </div>
      <div className="profile-content">
        <div className="profile-picture">
          <img src={profileInfo.profilePicture} alt="Profile Picture" />
          {isEditing && (
            <div className='profile-picture-upload'>
              <input type="file" onChange={handleImageUpload} />
            </div>
          )}
        </div>
        <div className="profile-details">
          <h2>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={profileInfo.name}
                onChange={handleInputChange}
              />
            ) : (
              profileInfo.name
            )}
          </h2>
          <p>{profileInfo.therapistType}</p>
          <p>
            Specialization:{' '}
            {isEditing ? (
              <select
                name="specialization"
                value={profileInfo.specialization}
                onChange={handleInputChange}
              >
                {specializationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              profileInfo.specialization
            )}
          </p>
          <p>
            Location:{' '}
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={profileInfo.location}
                onChange={handleInputChange}
              />
            ) : (
              profileInfo.location
            )}
          </p>
          <p>
            Years of Experience:{' '}
            {isEditing ? (
              <input
                type="number"
                name="yearsOfExperience"
                value={profileInfo.yearsOfExperience}
                onChange={handleInputChange}
              />
            ) : (
              profileInfo.yearsOfExperience
            )}
          </p>
          <p>About Me:</p>
          <p>
            {isEditing ? (
              <textarea
                name="about"
                value={profileInfo.about}
                onChange={handleInputChange}
              />
            ) : (
              profileInfo.about
            )}
          </p>
          <div className="edit-button">
            {isEditing ? (
              <button onClick={handleSave}>Save</button>
            ) : (
              <button onClick={handleEdit}>Edit</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
