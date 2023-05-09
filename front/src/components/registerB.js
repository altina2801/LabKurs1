

import React ,{useState,useEffect}from 'react'
import{Link }from "react-router-dom";
import "../css/registerB.css";
import {toast} from "react-toastify";
import axios from "axios";

const RegisterB = () => {
    const[data,setData]=useState([]);
    const loadData=async()=>{
        const response=await axios.get("http://localhost:5000/api/get");
   setData(response.data);

    };
    useEffect(()=>{
     loadData();
    },[]);
    const deleteUser = async (id) => {
        try {
          if (window.confirm("Are you sure that you want to delete this contact?")) {
            await axios.delete(`http://localhost:5000/api/remove/${id}`);
            toast.success("Contact deleted successfully");
            setTimeout(() => loadData(), 500);
          }
        } catch (error) {
          console.log(error);
          toast.error("An error occurred while deleting the contact");
        }
      };
      
    return (
        <div style={{marginTop:"150px"}}>
            <Link to="/addUser" >
            <button className="btn btn-contact" >Add User</button>
            </Link>
            
            
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>No.</th>
                        <th style={{textAlign:"center"}}>Name</th>  
                        <th style={{textAlign:"center"}}>Email</th> 
                        <th style={{textAlign:"center"}}>Contact</th> 
                        <th style={{textAlign:"center"}}>Action</th> 
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>{
                        return (
                            <tr key={item.id}>
                                <th scope ="row">{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}>
                                        <button className="btn btn-edit">Edit</button>
                                    </Link>
                                    <button className="btn btn-delete" onClick={()=>deleteUser(item.id)}>Delete</button>
                                    <Link to={`/view/${item.id}`}>
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

export default RegisterB;
