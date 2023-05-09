import React from 'react';
import RegistrationButtons from './RegistrationButtons';
import '../css/RegistrationPage.css';

function RegistrationPage() {
  return (
    <div className="registration-page">
      <div className="registration-container">
        <h1 className="registration-header">Join as a client or therapist</h1>
        <RegistrationButtons />
      </div>
    </div>
  );
}

export default RegistrationPage;