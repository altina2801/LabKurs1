import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "../css/addEdit.css";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  password: "",
  date_of_birth: "",
  gender: "",
  resume: "",
  certifications: "",
};

const AddEditTherapist = () => {
  const [state, setState] = useState(initialState);
  
  const navigate = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/api/therapists/${id}`)
        .then((response) => {
          setState({ ...response.data[0] });
        })
        .catch((error) => {
          toast.error("An error occurred while fetching the therapist");
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, date_of_birth, gender, resume, certifications } = state;

    if (!name || !email || !password || !date_of_birth || !gender || !resume || !certifications) {
      toast.error("Please provide a value for each input field");
    } else {
      const therapistData = {
        name,
        email,
        password,
        date_of_birth,
        gender,
        resume,
        certifications,
      };

      if (!id) {
        axios
          .post("http://localhost:5000/api/therapists", therapistData)
          .then(() => {
            toast.success("Therapist added successfully");
            setState(initialState);
            navigate("/professionals");
          })
          .catch((error) => {
            toast.error("An error occurred while adding the therapist");
          });
      } else {
        axios
          .put(`http://localhost:5000/api/therapists/${id}`, therapistData)
          .then(() => {
            toast.success("Therapist updated successfully");
            setState(initialState);
            navigate("/professionals");
          })
          .catch((error) => {
            toast.error("An error occurred while updating the therapist");
          });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name..." value={state.name || ""} onChange={handleInputChange} />
        
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your Email..." value={state.email || ""} onChange={handleInputChange} />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Your Password..." value={state.password || ""} onChange={handleInputChange} />
        
        <label htmlFor="date_of_birth">Date of Birth</label>
        <input type="date" id="date_of_birth" name="date_of_birth" value={state.date_of_birth || ""} onChange={handleInputChange} />
        
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" value={state.gender || ""} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        
        <label htmlFor="resume">Resume</label>
        <textarea id="resume" name="resume" placeholder="Your Resume..." value={state.resume || ""} onChange={handleInputChange} />
        
        <label htmlFor="certifications">Certifications</label>
        <textarea id="certifications" name="certifications" placeholder="Your Certifications..." value={state.certifications || ""} onChange={handleInputChange} />
        
        <input type="submit" value={id ? "Update" : "Save"} />
        
        <Link to="/professionals">
          <input type="button" value="Go Back" onClick={() => {}} />
        </Link>
      </form>
    </div>
  );
};

export default AddEditTherapist;