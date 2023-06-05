import React, { useState } from 'react';
import '../css/TherapistRegister.css';

const TherapistRegister = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    cvFile: null,
    specializations: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormValues((prevValues) => ({ ...prevValues, cvFile: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formValues);
    // Reset form values
    setFormValues({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      cvFile: null,
      specializations: '',
      skills: '',
    });
  };

  return (
    <div className="register-form-container">
      <h1>Therapist Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formValues.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formValues.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formValues.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            name="cvFile"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="specializations"
            placeholder="Specializations"
            value={formValues.specializations}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="skills"
            placeholder="Skills"
            value={formValues.skills}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default TherapistRegister;
