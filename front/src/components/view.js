import React,{useState,useEffect}from 'react'
import {useParams,Link} from "react-router-dom";
import axios from "axios";
import "../css/view.css";
const View = () => {
    const[user,setUser]=useState({});
    const{id}=useParams();
    useEffect(()=>{
        axios
        .get(`http://localhost:5000/api/get/${id}`)
        .then((resp)=>setUser({...resp.data[0]}))
     },[id]);
  return (
    <div style={{marginTop:"150px"}}>
        <div className="card">
            <div className="card-header"><p>User Detail</p></div>
        </div>
        <div className="container">
         <strong>ID:</strong>
         <span>{id}</span>
         <br/>
         <br/>
         <strong>Name:</strong>
         <span>{user.name}</span>
         <br/>
         <br/>
         <strong>EMAIL:</strong>
         <span>{user.email}</span>
         <br/>
         <br/>
         <strong>Password:</strong>
         <span>{user.password}</span>
         <br/>
         <br/>
         <Link to="/registerB" >
         <div className="btn btn-edit"></div></Link>

        </div>
      
    </div>
  )
}

export default View;


