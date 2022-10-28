import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './DoctorDeatails.css';
const DoctorDeatails = () => {
  let navigate = useNavigate();
  const[name,setName]=useState([])  
  const[Docname,setDocName]=useState([])  
  const[Payment,setPayment]=useState([])  
  const[user,setnewUser]=useState({
    username:"",
    doctorname:"",
    email:"",
    phone:"",
    chamber:"",
    password:"",
  

  })
  const[successfullPayment,setSucessfullPayment]= useState(false);
  const handleChange=(e)=>{
    const{name,value}=e.target;
    console.log(name,value)
    setnewUser({
      ...user,[name]:value
    })
  }
  const userSubmitDoc=(e)=>{
    console.log('i am hitted')
    e.preventDefault();
    const{username,doctorname,email,phone,chamber,password}=user;
   
    if(username&&doctorname&&email&&phone&&chamber&&password){
     axios.post('http://localhost:5000/Singupdoc/Doctor',user )
    .then(res=>alert(res.data.message),setSucessfullPayment(true))
    }

   
  }
  useEffect(()=>{
    successfullPayment===true && navigate("/", { replace: true });
   
  },[successfullPayment])
  return (
      <div className="container">
      <div className="card">
        <div className="card-image">	
          <h2 className="card-heading">
          Register As A Doctor
            <small> BongoCare We Are Stand With You</small>
          </h2>
        </div>
        <form className="card-form">
          <div className="input">
            <input type="text" placeholder="Username"     name="username"  value={user.username}  onChange={handleChange} className="input-field"  required/>
            
          </div>
                <div className="input">
            <input type="text"  placeholder="Doctor Name"   className="input-field"   name="doctorname"  value={user.doctorname}  onChange={handleChange}   required/>
       
          </div>
                <div className="input">
            <input type="email" placeholder="email"    name="email"  value={user.email}  onChange={handleChange} required/>
           
          </div>
          <div className="input">
            <input type="phone" placeholder="Phone"    name="phone"  value={user.phone}  onChange={handleChange} required/>
           
          </div>
          <div className="input">
            <input type="text" placeholder="Chamber"    name="chamber"  value={user.chamber}  onChange={handleChange} required/>
           
          </div>
          <div className="input">
            <input type="password" placeholder="Password"    name="password"  value={user.password}  onChange={handleChange} required/>
           
          </div>
          
          <div className="action">
            <button className="action-button" onClick={userSubmitDoc}>Register</button>
          </div>
        </form>
        <div className="card-info">
          <p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
        </div>
      </div>
    </div>
    
    
    );
};

export default DoctorDeatails;