import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/profile.css';

const Profile = () => {
  const { professionals_id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [profileInfo, setProfileInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the therapist's information from the API using the professionals_id
    fetch(`/api/therapists/${professionals_id}`)
      .then((response) => response.json())
      .then((data) => {
        setProfileInfo(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching therapist:', error);
        setLoading(false);
      });
  }, [professionals_id]);

  const specializationOptions = [
    'Anxiety',
    'Stress Management',
    'Depression',
    'Relationship Issues',
    'Self-esteem',
    'Trauma',
  ];

  // Render a loading indicator while fetching the therapist's information
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render an error message if the therapist's information couldn't be fetched
  if (!loading && !profileInfo) {
    return <div>Error fetching therapist.</div>;
  }

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
            <div className="profile-picture-upload">
              <input type="file" onChange={handleImageUpload} />
            </div>
          )}
        </div>
        <div className="profile-details">
          <h2>
            {isEditing ? (
              <input type="text" name="name" value={profileInfo.name} onChange={handleInputChange} />
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
              <textarea name="about" value={profileInfo.about} onChange={handleInputChange} />
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
