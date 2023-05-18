import React from 'react';
import '../css/BrowseTherapists.css';

const BrowseTherapists = () => {
  // Dummy data for therapists
  const therapists = [
    {
      id: 1,
      name: 'Therapist 1',
      specialization: 'Specialization 1',
      picture: 'therapist1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pricePerHour: 50,
    },
    {
      id: 2,
      name: 'Therapist 2',
      specialization: 'Specialization 2',
      picture: 'therapist2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pricePerHour: 60,
    },
    {
      id: 1,
      name: 'Therapist 1',
      specialization: 'Specialization 1',
      picture: 'therapist1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pricePerHour: 50,
    },
    {
      id: 2,
      name: 'Therapist 2',
      specialization: 'Specialization 2',
      picture: 'therapist2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pricePerHour: 60,
    },
    {
      id: 1,
      name: 'Therapist 1',
      specialization: 'Specialization 1',
      picture: 'therapist1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pricePerHour: 50,
    },
    {
      id: 2,
      name: 'Therapist 2',
      specialization: 'Specialization 2',
      picture: 'therapist2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pricePerHour: 60,
    },
    {
      id: 1,
      name: 'Therapist 1',
      specialization: 'Specialization 1',
      picture: 'therapist1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pricePerHour: 50,
    },
    {
      id: 2,
      name: 'Therapist 2',
      specialization: 'Specialization 2',
      picture: 'therapist2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pricePerHour: 60,
    },
    {
      id: 1,
      name: 'Therapist 1',
      specialization: 'Specialization 1',
      picture: 'therapist1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pricePerHour: 50,
    },
    {
      id: 2,
      name: 'Therapist 2',
      specialization: 'Specialization 2',
      picture: 'therapist2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pricePerHour: 60,
    },
    {
      id: 2,
      name: 'Therapist 2',
      specialization: 'Specialization 2',
      picture: 'therapist2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pricePerHour: 60,
    },
    {
      id: 2,
      name: 'Therapist 2',
      specialization: 'Specialization 2',
      picture: 'therapist2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      pricePerHour: 60,
    },
    // Add more therapists here
  ];

  return (
    <div className="main-container">
       {/* Div with a list of therapist names */}
       <div className="therapist-names">
        {therapists.map((therapist) => (
          <div key={therapist.id} className="therapist-name">
            <div className="profile-picture">
              <img src={therapist.picture} alt={therapist.name} />
            </div>
            <p>{therapist.name}</p>
          </div>
        ))}
      </div>
    <div className="therapists-container">
      <div className="therapists-grid">
        {therapists.map((therapist) => (
          <div key={therapist.id} className="therapist-card">
            <div className="profile-picture">
              <img src={therapist.picture} alt={therapist.name} />
            </div>
            <h3>{therapist.name}</h3>
            <p>{therapist.specialization}</p>
            <p>{therapist.description}</p>
            <p>Price per hour: ${therapist.pricePerHour}</p>
            <button className="book-button">Book</button>
          </div>
        ))}
      </div>


    </div>
    </div>
  );
};

export default BrowseTherapists;