import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './DoctorDeatails.css';
const DoctorDeatails = () => {
  let navigate = useNavigate();
  const[name,setName]=useState([])  
  const[Docname,setDocName]=useState([])  
  const [visible, setVisible] = useState(false);
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
    .then(res=>setVisible(true))
    }

   
  }

  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 1000);
      
      return () => clearTimeout(timeout);
    }
    
  }, [visible]);
  return (
    <div class="flex items-center min-h-screen p-4 bg-gray-100 justify-center">
         <div
        className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${
          visible ? '' : 'hidden'
        }`}
      >
         <div className="max-w-xl w-full bg-green-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
         Registration Sucessful 
       
       
      </div>
      </div>
    <div class=" overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
    

        <div class="p-5 bg-white md:flex-1">
          <h3 class="my-4 text-2xl font-semibold text-gray-700 text-blue-950">
            Doctor Registration
          </h3>
          <form action="#" class="flex flex-col space-y-5" method="POST">
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-sm font-semibold text-gray-500">
                User Name
              </label>
              <input
                type="text" placeholder="Username"     name="username"  value={user.username}  onChange={handleChange} className="input-field" 
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            
            <div class="flex flex-col space-y-1">
            <label for="email" class="text-sm font-semibold text-gray-500">
              Doctor Name
              </label>
              <input
             
             type="text"  placeholder="Doctor Name"   className="input-field"   name="doctorname"  value={user.doctorname}  onChange={handleChange}  
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div> <div class="flex flex-col space-y-1">
            <label for="email" class="text-sm font-semibold text-gray-500">
              Email
              </label>
              <input
             
                
                type="email" placeholder="Email"    name="email"  value={user.email}  onChange={handleChange}
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-sm font-semibold text-gray-500">
                Phone
              </label>
              <input
                type="phone" placeholder="Phone"    name="phone"  value={user.phone}  onChange={handleChange} required
                autofocus
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-sm font-semibold text-gray-500">
                Chamber
              </label>
              <input
                type="text" placeholder="Chamber"    name="chamber"  value={user.chamber}  onChange={handleChange}
                autofocus
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-sm font-semibold text-gray-500">
               Password
              </label>
              <input
                  type="password" placeholder="Password"    name="password"  value={user.password}  onChange={handleChange} 
                autofocus
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
           
          
          
            <div>
              <button
                type="submit"
                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-950  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                onClick={userSubmitDoc}
              >
               Register
              </button>
            </div>
           
          </form>
        </div>
     
    </div>
  </div>
    
    
    );
};

export default DoctorDeatails;