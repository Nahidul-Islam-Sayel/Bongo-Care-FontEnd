import axios from 'axios';
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from '../../App';
import "./Login.css";
const Login = () => {
  const[login,setLogin,docLogin, setDocLogin,adminLogin, setAdminLogin]= useContext(userContext);
  console.log(login)
  const[profile,setProfile]= useState(0);
  const[profileDoc,setProfileDoc]= useState(false);
  const[profileAdmin,setProfilAdmin]= useState(false);
    const[user,setnewUser]=useState({
      username:"",
      password:""
    })
    const[isDoctors,setIsDoctor]=useState(false);
    const[isUsers,setIsUsers]=useState(true);
    const [DiagnosticCenter, setDiagnosticCenter] = useState(false);
    const handleChange=(e)=>{
      const{name,value}=e.target;
      setnewUser({
        ...user,[name]:value
      })
    }
    const userSubmit=(e)=>{
      e.preventDefault();
      const{username,password}=user;
     
      if(username&&password){
       axios.post('http://localhost:5000/Singup/login',user )
      .then(res=>((res.data.error)? alert(res.data.error) : (alert(res.data.message), setProfile(true),  sessionStorage.setItem('username', username),setLogin(1),sessionStorage.setItem("Token",res.data.access_token),console.log(res))));
    
      }

     
    }
    const userSubmitDoc=(e)=>{
      e.preventDefault();
      const{username,password}=user;
     
      if(username&&password){
       axios.post('http://localhost:5000/Singupdoc/login',user )
      .then(res=>((res.data.error)? alert(res.data.error) : (alert(res.data.message), setProfileDoc(true),  sessionStorage.setItem('username', username),setDocLogin(1),sessionStorage.setItem("Token",res.data.access_token),console.log(res))));
    
      }

     
    }
    const userAdmin=(e)=>{
      e.preventDefault();
      const{username,password}=user;
     
      if(username&&password){
       axios.post('http://localhost:5000/SingUpAdmin/login',user )
      .then(res=>((res.data.error)? alert(res.data.error) :( (alert(res.data.message),setAdminLogin(1),setProfilAdmin(true),console.log(res),sessionStorage.setItem('Admin', true),sessionStorage.setItem("Token",res.data.access_token)))));
    
      }

     
    }
    let navigate = useNavigate();

    useEffect(()=>{
  
      profile && navigate("/profile", { replace: true });
    },[profile])
    useEffect(()=>{
  
      profileDoc && navigate("/profileDoc", { replace: true });
    },[profileDoc])
    useEffect(()=>{
  
      profileAdmin && navigate("/profileAdmin", { replace: true });
    },[profileAdmin])
   
  
 
  return (
    <div class="account">
      <div class="login">
     { (isUsers &&!isDoctors&& !DiagnosticCenter)&&
          <form action="" method="post">
            <h2>Login as a user</h2>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Name "
              required
            />
            
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder=" Password "
              required
            />
           
            <button type="submit" name="reg" value="submit" onClick={userSubmit}>
              <b>Login</b>
            </button>
            <p  onClick={()=>  {setIsDoctor(true) ; setIsUsers(false) ;setDiagnosticCenter(false)}} >Login as a Doctor</p>
            <p  onClick={()=>  {setIsDoctor(false) ; setIsUsers(false);setDiagnosticCenter(true)}} >Login as a  Admin</p>
            
          </form>}
          {(!isUsers && isDoctors&& !DiagnosticCenter)&&
          <form action="" method="post">
            <h2>Login as a doctor</h2>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password "
              required
            />
           
            <button type="submit" name="reg" value="submit" onClick={userSubmitDoc}>
              <b>Login</b>
            </button>
            <p  onClick={()=>  {setIsDoctor(false) ; setIsUsers(true); setDiagnosticCenter(false)}} >Login as a User</p>
            <p  onClick={()=>  {setIsDoctor(false) ; setIsUsers(false); setDiagnosticCenter(true)}} >Login as a  Admin</p>
            
          </form>}
          { (!isUsers &&!isDoctors&& DiagnosticCenter)&&
          <form action="" method="post">
            <h2>Login as a  Admin</h2>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder=" Password "
              required
            />
           
            <button type="submit" name="reg" value="submit" onClick={userAdmin}>
              <b>Login</b>
            </button>
            <p  onClick={()=>  {setIsDoctor(true) ; setIsUsers(false); setDiagnosticCenter(false)}} >Login as a Doctor</p>
            <p  onClick={()=>  {setIsDoctor(false) ; setIsUsers(true); setDiagnosticCenter(false)}} >Login as a  User</p>
            
          </form>}
      
      </div>
    </div>
  );
};

export default Login;
