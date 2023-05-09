

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "../css/addEdit.css";
import axios from "axios";
import { toast } from "react-toastify";


const initialState = {
  name: "",
  email: "",
  password: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = state;
    if (!name || !email || !password) {
      toast.error("Please provide a value for each input field");
    } else {
      axios.post("http://localhost:5000/api/post", {
        name,
        email,
        password,
      }).then(() => {
        setState(initialState);
      }).catch((err) => {
        toast.error(err.response.data);
        setTimeout(() => {
          navigate("/registerB");
        }, 500);
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alignContent: "center",
      }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your Name..." value={state.name} onChange={handleInputChange} />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Your Email..." value={state.email} onChange={handleInputChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Your Password..." value={state.password} onChange={handleInputChange} />
        <input type="submit" value="Save" />
        <Link to="/registerB">
          <input type="button" value="Go Back" onClick={() => {}}  />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
