import { Line } from 'rc-progress';
import React, { useEffect, useState } from 'react';
import { FcEmptyTrash } from "react-icons/fc";
import PieChart from 'react-pie-graph-chart';
import { Link } from 'react-router-dom';
import './AdminProfile.css';
const AdminProfile = () => {
  const[doctor,setDoctor]=useState([]);
  const[doctorpar,setdocpar]=useState(0);
  const[allUserRep,setAllUserRep]=useState([]);
  const[allUser,setAllUser]=useState([]);
  console.log(doctor.length)
  useEffect(()=>{  
    fetch('http://localhost:5000/Singupdoc/AllDoctors',{
      method: 'GET',
      headers:{
        'Content-Type' : 'application/json',
        "authorization" : `Bearer ${sessionStorage.getItem("Token")}`
      }
    })
    .then(res=>res.json())
    .then(res=>setDoctor(res))
},[])
useEffect(()=>{
     
  fetch('http://localhost:5000/BloodDonner/AllDonner',{
    method: 'GET'
  })
  .then(res=>res.json())
  .then(res=>
 setAllUserRep(res) 
  )
},[])
useEffect(()=>{
     
  fetch('http://localhost:5000/Singup/Alluserprofile',{
    method: 'GET'
  })
  .then(res=>res.json())
  .then(res=>
    setAllUser(res)
  )
},[])

    return (
      <div className="container">
        <div className="row">
        <div class="col-md-4 mb-3 xyz">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
              <div class="mt-3">
                <h4>Nahidul islam Sayel</h4>
                <p class="text-secondary mb-1">Admin</p>
          
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-3">
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 class="mb-0">Name</h6>
              <span class="text-secondary">Nahidul Islam Sayel</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 class="mb-0">Email</h6>
              <span class="text-secondary">Sayel@gmail.com</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 class="mb-0">Address</h6>
              <span class="text-secondary">111 Howapara Sylhet</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 class="mb-0">Phone</h6>
              <span class="text-secondary">01780782266666666</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <div class="row">
              <div class="col-sm-12">
            {/* <NavLink to="/EdiProfile"><a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit Profile</a></NavLink>    */}
              </div>
            </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <div class="row">
              <div class="col-sm-12">
            <form action="" encType="multipart/form-data">
              <input type="file" name="avater" id="" placeholder='Please Upload Your File' />
              <input type="submit" value="submit" name="submit" placeholder='submit' />
              </form> 
              </div>
            </div>
            </li>
            </ul>
        </div>

      </div>
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-4">
      <div class="card text-white bg-info" >
  <div class="card-header">Total Doctor</div>
  <div class="card-body">
    <h5 class="card-title">{doctor.length}</h5>
    <p class="card-text"><img src="https://cdn.pixabay.com/photo/2016/03/31/20/40/arrow-1295953_960_720.png" alt="" /></p>
  </div>
  
</div>
      </div>
      <div className="col-md-4">
      <div class="card text-white  bg-secondary" >
  <div class="card-header">Total User</div>
  <div class="card-body">
    <h5 class="card-title">{allUser.length}</h5>
    <p class="card-text"><img src="https://cdn.pixabay.com/photo/2016/03/31/20/40/arrow-1295953_960_720.png" alt="" /></p>
  </div>
  
</div>
      </div>
      <div className="col-md-4">
      <div class="card text-white bg-primary" >
  <div class="card-header">Blood Donner And Volunteer</div>
  <div class="card-body">
    <h5 class="card-title">{allUserRep.length}</h5>
    <p class="card-text"><img src="https://cdn.pixabay.com/photo/2016/03/31/20/40/arrow-1295953_960_720.png" alt="" /></p>
  </div>
  
</div>
      </div>
      </div>
      <div className='row'>
<div className="col-md-7">
  <h5>Doctor</h5>
<Line percent={doctor.length} strokeWidth={2} strokeColor="#E97D30" />
<h5>User</h5>
<Line percent={setAllUser.length} strokeWidth={2} strokeColor="#62B170" />
<h5>Blood Donner And Volunteer</h5>
<Line percent={setAllUserRep.length} strokeWidth={2} strokeColor="#F1AF20" />
</div>
<div className="col-md-5">
<PieChart data={[
    {
      type: "Doctor",
      value: 10,
      color: "#E97D30"
},
    {
      type: "User",
      value: 10,
      color: "#62B170"
    },
    {
      type: "Report",
      value: 10 ,
      color: "#F1AF20"
    }
  ]} />
</div>
      </div>
      <div className="doctor">
        <h5>Doctor</h5>
      <table class="table">
  <thead>
  <tr>
   
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Chamber</th>
      <th scope="col">Phone</th>
      <th scope="col"><FcEmptyTrash/> || Delete</th>
    </tr>
  </thead>
  { doctor&& doctor.map( data=><tbody>
 <tr>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.chamber}</td>
      <td>{data.phone}</td>
      <td>  <Link to={`/deleteDoctor/${data._id}`}>   Delete</Link>  </td>
    </tr>
  </tbody>)}
</table>
      </div>
     
      <div className="doctor">
        <h5>User</h5>
      <table class="table">
  <thead>
  <tr>
   
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  { allUser&& allUser.map( data=><tbody>
 <tr>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
    </tr>
  </tbody>)}
</table>
      </div>
      </div>
      </div>
      </div> 
    );
};

export default AdminProfile;