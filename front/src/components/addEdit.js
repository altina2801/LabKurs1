import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/addEdit.css';
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const { name, email, password } = state;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error('Please provide value into each input field ');
    } else {
      axios
        .post('http://localhost:5000/api/get/post', {
          name,
          email,
          password,
        })
        .then(() => {
          setState({ name: '', email: '', password: '' });
          navigate('/registerB');
        })
        .catch((err) => toast.error(err.response.data));
        toast.success("Contact Added Successfully");
        setTimeout(()=>navigate.pushState("/"),500);
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <form
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '400px',
          alignContent: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name..."
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your Email..."
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="name">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your Password..."
          value={password}
          onChange={handleInputChange}
        />
      <Link to="./registerB"> <input type="submit" value="Save" /></Link> 
        <Link to="./registerB">
          <input type="button" value="Go Back"></input>
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;

