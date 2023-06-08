import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import "../css/TherapistRegister.css";

const TherapistRegister = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [resume, setResume] = useState('');
  const [certifications, setCertifications] = useState('');
  const [professionType, setProfessionType] = useState('');
  const [image, setImage] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [skills, setSkills] = useState('');
  const [specializations, setSpecializations] = useState('');
  const [cv, setCV] = useState('');
  const [about, setAbout] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    // Rest of the code

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('date_of_birth', dateOfBirth);
    formData.append('gender', gender);
    formData.append('resume', resume);
    formData.append('certifications', certifications);
    formData.append('profession_type', professionType);
    formData.append('image', image);
    formData.append('confirm_password', confirmPassword);
    formData.append('skills', skills);
    formData.append('specializations', specializations);
    formData.append('cv', cv);
    formData.append('about', about);
    formData.append('description', description);

    // Send the form data to the server
    try {
      const response = await axios.post('http://localhost:5000/api/therapists', formData);
      console.log(response.data); // Log the response data for debugging
      toast.success('You created your profile successfully.');
      navigate('/'); // Navigate to a different route upon successful registration
    } catch (error) {
      console.error(error); // Log any errors for debugging
      toast.error('Failed to register therapist. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2 className="the-register-name">Register</h2>
        <div className="input-row">
          <div className="input-field">
            <i className="fa fa-user"></i>
            <input type="text" placeholder="First and last name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="input-field">
            <i className="fa fa-envelope"></i>
            <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-field">
            <i className="fa fa-lock"></i>
            <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </div>
        <div className="input-row">
          <div className="input-field">
            <i className="fa fa-calendar"></i>
            <input type="date" placeholder="Date of Birth" name="date_of_birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
          </div>
          <div className="input-field">
            <i className="fa fa-venus-mars"></i>
            <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="input-row">
          <div className="input-field">
            <i className="fa fa-file"></i>
            <textarea placeholder="Resume" name="resume" value={resume} onChange={(e) => setResume(e.target.value)} required></textarea>
          </div>
          <div className="input-field">
            <i className="fa fa-certificate"></i>
            <textarea placeholder="Certifications" name="certifications" value={certifications} onChange={(e) => setCertifications(e.target.value)} required></textarea>
          </div>
        </div>
        <div className="input-row">
          <div className="input-field">
            <i className="fa fa-users"></i>
            <select name="profession_type" value={professionType} onChange={(e) => setProfessionType(e.target.value)} required>
              <option value="">Select Profession Type</option>
              <option value="therapist">Therapist</option>
              <option value="psychologist">Psychologist</option>
            </select>
          </div>
          <div className="input-field">
            <i className="fa fa-image"></i>
            <input type="file" accept="image/*" name="image" onChange={handleImageChange} required />
          </div>
        </div>
        <div className="input-row">
          <div className="input-field">
            <i className="fa fa-lock"></i>
            <input type="password" placeholder="Confirm Password" name="confirm_password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <div className="input-field">
            <i className="fa fa-check"></i>
            <input type="text" placeholder="Skills" name="skills" value={skills} onChange={(e) => setSkills(e.target.value)} required />
          </div>
        </div>
        <div className="input-row">
          <div className="input-field">
            <i className="fa fa-check"></i>
            <input type="text" placeholder="Specializations" name="specializations" value={specializations} onChange={(e) => setSpecializations(e.target.value)} required />
          </div>
          <div className="input-field">
            <i className="fa fa-file"></i>
            <input type="text" placeholder="CV" name="cv" value={cv} onChange={(e) => setCV(e.target.value)} required />
          </div>
        </div>
        <div className="input-row">
          <div className="input-field">
            <i className="fa fa-info-circle"></i>
            <textarea placeholder="About" name="about" value={about} onChange={(e) => setAbout(e.target.value)} required></textarea>
          </div>
          <div className="input-field">
            <i className="fa fa-info-circle"></i>
            <textarea placeholder="Description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default TherapistRegister;
