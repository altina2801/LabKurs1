import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const RegisterTherapist = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [gender, setGender] = useState('');
  const [resume, setResume] = useState('');
  const [certifications, setCertifications] = useState('');
  const [profession_type, setProfession_type] = useState('');
  const [skills, setSkills] = useState('');
  const [specializations, setSpecializations] = useState('');
  const [description, setDescription] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const therapistData = {
      name,
      email,
      password,
      confirm_password,
      date_of_birth,
      gender,
      resume,
      certifications,
      profession_type,
      skills,
      specializations,
      description,
    };

    try {
      await axios.post('/api/therapists', therapistData);
      // Handle successful registration, e.g., show a success message
      console.log('Therapist registered successfully');
      //Navigate('./home');
      navigate(`./home`);
    } catch (error) {
      // Handle registration error, e.g., display an error message
      console.error('Error registering therapist:', error);
    }
  };

  return (
    <div>
      <h2>Register Therapist</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} name="name"onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} name="password"onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" value={confirm_password}name="confirm_password" onChange={(e) => setConfirm_password(e.target.value)} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" value={date_of_birth} name="date_of_birth" onChange={(e) => setDate_of_birth(e.target.value)} />
        </label>
        <br />
        <label>
          Gender:
          <select value={gender} name="gender"onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Resume:
          <textarea value={resume}name="resume" onChange={(e) => setResume(e.target.value)} />
        </label>
        <br />
        <label>
          Certifications:
          <textarea value={certifications} name="certifications"onChange={(e) => setCertifications(e.target.value)} />
        </label>
        <br />
        <label>
          Profession Type:
          <select value={profession_type}name="profession_type" onChange={(e) => setProfession_type(e.target.value)}>
          <option value="other">Other</option>
            <option value="therapist">Therapist</option>
            <option value="psychologist">Psychologist</option>
          </select>
        </label>
        <br />
        <label>
          Skills:
          <input type="text" value={skills} name="skills"onChange={(e) => setSkills(e.target.value)} />
        </label>
        <br />
        <label>
          Specializations:
          <input type="text" value={specializations}name="specializations" onChange={(e) => setSpecializations(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} name="description"onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterTherapist;
