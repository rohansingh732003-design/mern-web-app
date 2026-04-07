import React, { useEffect, useState } from 'react'
import "./user.css"
import axios from "axios"
import { Link } from 'react-router-dom';

const User = () => {
  const [users,setUsers] = useState([])
  useEffect (() => {
   const fechData = async()=> {
    try{
    const response = await axios.get("http://localhost:8000/api/user");
    setUsers(response.data)
  } catch (error){
      console.log("Error while fethching data",error);
  }
};
    fechData()
  },[]);



  return (
 <div className='userTable'>
    <Link to="/add" type="button" className="btn btn-primary">
      Add User <i className="bi bi-person-fill-add"></i>
    </Link>
    <div className='table table-bordered'> 
   
    </div>
    <table className="table border shadow table-bordered"> 
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user,index)=>{
      return (
         <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
<td className="d-flex justify-content-center gap-2">
  <Link to={`/update/${user._id}`} className="btn btn-sm btn-info "> 
    <i className="bi bi-pencil-square"></i>
  </Link>
  <button className="btn btn-sm btn-danger">
    <i className="bi bi-trash"></i>
  </button>
  </td>
</tr>
      );
    })}
   
</tbody>
</table>
</div>
  )};

export default User

