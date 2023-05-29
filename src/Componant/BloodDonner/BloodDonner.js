import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './BloodDonner.css';
const BloodDonner = () => {
  let navigate = useNavigate();
  const[successfullPayment,setSucessfullPayment]= useState(false);
  const [visible, setVisible] = useState(false);
  const [visibleR, setVisibleR] = useState(false);
  const[user,setnewUser]=useState({
    name:"",
    email:"",
    phone:"",
    city:"",
    group:""
  })
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
    const{name,email,phone,city}=user;
   
    if(name&&email&&phone&&city){
     axios.post('http://localhost:5000/BloodDonner/DonateBlood',user )
    .then(res=>(res.data.message)==="username and email should be uniqe"? setVisibleR(true): setVisible(true))
    }

   
  }
  useEffect(()=>{
    successfullPayment===true && navigate("/", { replace: true });
 
  },[successfullPayment])
  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 1000);
      
      return () => clearTimeout(timeout);
    }
    
  }, [visible]);
  useEffect(() => {
    if (visibleR) {
      const timeout = setTimeout(() => {
        setVisibleR(false);
      }, 1000);
      
      return () => clearTimeout(timeout);
    }
    
  }, [visibleR]);
    return (
        <div>
           <div className="container ">
           <div
        className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${
          visible ? '' : 'hidden'
        }`}
      >
         <div className="max-w-xl w-full bg-green-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
        Registration Successful
       
       
      </div>
      </div>
      <div
        className={`fixed inset-0  flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${
          visibleR ? '' : 'hidden'
        }`}
      >
         <div className="max-w-xl w-full bg-red-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
         User already registered
       
       
      </div>
      </div>
      <div className="card border border-black">
        <div className=" bloodimg text-center">	
        
        <br /><br />
          <h2 className="Bongo text-4xl">
         
           Make A Blood Donor   </h2><br/>
           <h2 className="Care text-3xl">Donate Blood Save Life</h2>
        
        </div>
        <form className="card-form">
          <div className="input text-center">
            <input type="text" placeholder="Name"     name="name"  value={user.name}  onChange={handleChange} className="input-field border-black"   required/>
            
          </div>
              
            <div className="input">
            <input type="email" placeholder="Email"    name="email"  value={user.email} className="input-field"   onChange={handleChange} required/>
           
          </div>
          <div className="input">
            <input type="phone" placeholder="Phone"    name="phone"  value={user.phone}  className="input-field" onChange={handleChange} required/>
           
          </div>
          <br />
          <label for="cars">Choose a City Name:</label>     
          <div className="input">
        

<select  id="cars" type="text"  value={user.city}   name="city" onChange={handleChange}>
<option value=""></option>
  <option value="Sylhet">Sylhet</option>
  <option value="Dhaka">Dhaka</option>
  <option value="Chittagong">Chittagong</option>
  <option value="Mymensingh.">Mymensingh</option>
  <option value="Rajshahi.">Rajshahi</option>
  <option value="Kulna">Kulna</option>
  <option value="Barisal">Barisal</option>
  <option value="Comilla">Comilla</option>
</select>
  
          </div>
          <br />
          <label for="cars">Blood Group:</label>     
          <div className="input">
        

<select  id="cars" type="text"  value={user.group}   name="group" onChange={handleChange}>
<option value=""></option>
  <option value="A+">A+</option>
  <option value="A-">A-</option>
  <option value="B+">B+</option>
  <option value="B+">B-</option>
  <option value="AB+">AB+</option>
  <option value="AB-">AB-</option>
  <option value="O+">O+</option>
  <option value="O-">O+</option>
</select>
  
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
        </div>
    );
};

export default BloodDonner;