import React, { useEffect, useState } from 'react';
import '../css/BrowseTherapists.css';

import { Link } from 'react-router-dom';
const BrowseTherapists = () => {
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    fetch('/api/therapists')
      .then((response) => response.json())
      .then((data) => setTherapists(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="main-container">
      <div className="therapists-container">
        <div className="therapists-grid">
          {therapists.map((therapist) => (
            <div key={therapist.professionals_id} className="therapist-card">
              <div className="profile-picture">
                <img src={therapist.image} alt={therapist.name} />
              </div>
              <h3>{therapist.name}</h3>
              <p>{therapist.profession_type}</p>
              <p>{therapist.resume}</p>
              <p>Price per hour: ${therapist.pricePerHour}</p>
              <Link to={`/profile/${therapist.professionals_id}`}>
  <button className="book-button">Book</button>
</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseTherapists;
