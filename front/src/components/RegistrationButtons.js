import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faMugHot } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

function RegistrationButtons() {
  const navigate = useNavigate(); 
  const handleFreelancerRegistration = () => {
    navigate('/TherapistRegister');
  };

  const handleUserRegistration = () => {
    navigate('/register');
  };

  return (
    <div className="registration-buttons">
      <button className="therapist-registration-button" onClick={handleFreelancerRegistration}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faSuitcase} size="2x" />
          <span>I’m a freelancer, looking for work</span>
        </div>
      </button>
      <button className="user-registration-button" onClick={handleUserRegistration}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faMugHot} size="2x" />
          <span>I’m a user, searching for a therapist</span>
        </div>
      </button>
    </div>
  );
}

export default RegistrationButtons;
