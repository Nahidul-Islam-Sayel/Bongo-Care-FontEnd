import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { userContext } from '../../App';
import './Doctor.css';
const Doctor = () => {
    const[doctor,setDoctor]=useState([]);
    const[login,setLogin,docLogin, setDocLogin,givePayment, setPayment,Doctorname,setDoctorName]= useContext(userContext);
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

    return (
        <div className='fullbody'>
        {  
 doctor.map(data=> <div class="row-4">
   <Link to="/Payment">
 <div class="write">
<img src={data.img} alt="" srcset="" />
     
     <h2>{data.name}</h2>
     <p>Phone: {data.phone}</p>
     <p>Time to see the patient: {data.time}</p>

 </div>
 </Link>
 
</div>)

}
            
        </div>
    );
};

export default Doctor;