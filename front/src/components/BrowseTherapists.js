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
    <div className="therapists-container">
      <div className="therapists-grid">
        {therapists.map((therapist) => (
          <div key={therapist.id} className="therapist-card">
            <img src={therapist.picture} alt={therapist.name} />
            <h3>{therapist.name}</h3>
            <p>{therapist.specialization}</p>
            <p>{therapist.description}</p>
            <p>Price per hour: ${therapist.pricePerHour}</p>
            <button className="book-button">Book</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTherapists;