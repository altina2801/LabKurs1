import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile({ id }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from the API
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/get/id`); // Replace '1' with the actual user ID
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Date of Birth: {user.date_of_birth}</p>
      <p>Phone Number: {user.phone_number}</p>
      <p>Address: {user.address}</p>
    </div>
  );
}

export default UserProfile;
