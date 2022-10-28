import React, { useContext, useEffect, useState } from 'react';
import { FcEmptyTrash, FcViewDetails } from "react-icons/fc";
import { Link, NavLink } from 'react-router-dom';
import { userContext } from '../../App';
import './Profile.css';
let k=1;
const Profile = () => {
    const[data,setData]=useState({});
    const[report,setReport]=useState([]);
    const[login,setLogin]= useContext(userContext);
      if(data.length>0){
        sessionStorage.setItem('login', true)
        setLogin(1)
    }
    
function arrayBufferToBase64( buffer ) {
	var binary = '';
	var bytes = new Uint8Array( buffer );
	var len = bytes.byteLength;
	for (var i = 0; i < len; i++) {
		binary += String.fromCharCode( bytes[ i ] );
	}
	return window.btoa( binary );
}
    
    useEffect(()=>{
     
        fetch('http://localhost:5000/Singup/Profile?username='+sessionStorage.getItem('username'),{
          method: 'GET',
          headers:{
            'Content-Type' : 'application/json',
            "authorization" : `Bearer ${sessionStorage.getItem("Token")}`

          }
        })
        .then(res=>res.json())
        .then(res=>setData(res))
    },[])
  
   
    useEffect(()=>{
     
      fetch('http://localhost:5000/Upload/ReportPost?username='+sessionStorage.getItem('username'),{
        method: 'GET'
      })
      .then(res=>res.json())
      .then(res=>
     setReport(res) 
      )
  },[])

  const[search,setSearch]=useState("");
    return (
        <div class="container">
       { data[0] && <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                <div class="mt-3">
                  <h4>{data[0].username && data[0].username}</h4>
                  <p class="text-secondary mb-1">A family mamber of bongocare</p>
                  <p class="text-muted font-size-sm">{data[0].address&& data[0].address}</p>
                  <button class="btn btn-primary">Follow</button>
                  <button class="btn btn-outline-primary">Message</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card mt-3">
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Name</h6>
                <span class="text-secondary"> {data[0].name && data[0].name}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Email</h6>
                <span class="text-secondary">  {data[0].email && data[0].email}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Phone</h6>
                <span class="text-secondary">   {data[0].phone && data[0].phone}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                <span class="text-secondary"> {data[0].address && data[0].address}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <div class="row">
                <div class="col-sm-12">
              <NavLink to="/EdiProfile"><a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit Profile</a></NavLink>   
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
        <div class="col-md-8">
          <input className='searchbar' type="text" placeholder='Search....' 
          onChange={(event)=>{setSearch(event.target.value);}}
          />
        <table class="table">
        <thead class="thead-light">
        <tr>
      <th scope="col">Date</th>
      <th scope="col">Test Name</th>
      <th scope="col"><FcViewDetails/>||View Report</th>
      <th scope="col"><FcEmptyTrash/> || Delete</th>
    </tr>
    {report && report.filter((data)=>{
      if(search===""){
        return data;
      }
      else if(data.testName?.toLowerCase().includes(search?.toLowerCase())){
          return data;
      }
    }).map ((data,key)=>( <tr key={key}>
    
     <th scope="row">{data.date}</th>
      <td>{data.testName}</td>
  <Link to={`/viewReport/${data._id}`}>  <td> 
       View Report
          </td>  
          </Link>  
          <td> 
          <Link to={`/delete/${data._id}`}>   Delete</Link>  
          </td>
    </tr>
   )  )}
        </thead>
        </table>
          </div>
          </div>}
          </div>
    );
};

export default Profile;