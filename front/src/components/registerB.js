
import React,{useState,useEffect}from 'react';
import {Link}from "react-router-dom";
import"../css/registerB.css";
import {toast}from "react-toastify";
import axios from "axios";
const RegisterB=()=>{
    const[data,setData]=useState([]);
    const loadData= async ()=>{
     const  response=await axios.get("http://localhost:5000/api/get");
     setData(response.data);
    };
    useEffect(()=>{
     loadData();

    },[]);
    const deleteContact=(id)=>{
        if(window.confirm("Are you sure that you wanted to delete that contact"))
    axios.delete("http://localhost:5000/api/remove/${id}");
    toast.success("Contact Deleted Successfully");
    setTimeout(()=>loadData(),500);
    
}
    return(
       <div  style={{marginTop:"150px"}}>
        <Link to="/addEdit">
        <div style={{ marginTop: "20px", textAlign: "center" }}>
  <button className="btn btn-register" style={{ width: "150px", height: "30px" }}>Add User</button>
</div>


        </Link>
        
        <table className="styled-table">
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>No.</th>
                    <th style={{textAlign:"center"}}>Name</th>
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Password</th>
                    <th style={{textAlign:"center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>{
                    return(
                        <tr key={item.id}>
                       <th scope="row">{index+1}</th>
                     
                       <td>{item.name}</td>
                       <td>{item.email}</td>
                       <td>{item.password}</td>
          <td>            
          <td>
    <Link to={`/update/${item.id}`}>
        <button className="btn btn-edit">Edit</button></Link>
        <Link to={`/delete/${item.id}`}>
    <button className="btn btn-delete" onClick={()=>deleteContact(item.id)} >Delete</button></Link>
 
</td>

</td>
                        
                        
                        </tr>
                    )
                })}
            </tbody>
        </table>
       </div>

   
       );
    
}
export default RegisterB;
