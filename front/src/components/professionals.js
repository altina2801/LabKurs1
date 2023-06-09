import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import '../css/Professionals.css';

const Professionals = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/therapists');
      setData(response.data);
    } catch (error) {
      console.log(error);
      toast.error('An error occurred while retrieving therapists');
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteTherapist = async (id) => {
    try {
      if (window.confirm('Are you sure that you want to delete this therapist?')) {
        await axios.delete(`http://localhost:5000/api/therapists/${id}`);
        toast.success('Therapist deleted successfully');
        setTimeout(() => loadData(), 500);
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred while deleting the therapist');
    }
  };

  return (
    <div style={{ marginTop: '150px' }}>
      <Link to="/addTherapist">
        <button className="btn btn-contact">Add Therapist</button>
      </Link>

      <table className="styled-table">
        <thead>
          <tr>
            <th className="text-center">No.</th>
            <th className="text-center">Name</th>
            <th className="text-center">Email</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.professionals_id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/updateTherapist/${item.professionals_id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button className="btn btn-delete" onClick={() => deleteTherapist(item.professionals_id)}>
                    Delete
                  </button>
                  <Link to={`/viewTherapist/${item.professionals_id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Professionals;
