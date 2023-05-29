import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminProfile from "./Componant/AdminProfile/AdminProfile";
import DeleteDoc from "./Componant/AdminProfile/DeleteDoc";
import BloodDonner from "./Componant/BloodDonner/BloodDonner";
import FindBlood from "./Componant/BloodDonner/FindBlood";
import DeleteReport from "./Componant/DeleteReport/DeleteReport";
import DoctorDeatails from "./Componant/Doctor/DoctorDeatails";
import DoctorProfile from "./Componant/DoctorsProfile/DoctorProfile";
import Footer from "./Componant/Footer/Footer";
import Home from "./Componant/HomePage/Home";
import Login from "./Componant/LoginPage/Login";
import Nevbar from "./Componant/Nevbar/Nevbar";
import EditProfile from "./Componant/Profile/EditProfile";
import Load from "./Componant/Profile/Load";
import Profile from "./Componant/Profile/Profile";
import User from "./Componant/SignInPage/User";
import UserUploadFile from "./Componant/UserUploadFile/UserUploadFile";
export const userContext = createContext();
function App() {
  const [login, setLogin] = useState(0);
  const [givePayment, setPayment] = useState([]);
  const [Doctorname,setDoctorName] = useState([]);
  const [docLogin, setDocLogin] = useState(0);
  const [adminLogin, setAdminLogin] = useState(0);


  return (
    <userContext.Provider value={[login,setLogin,docLogin, setDocLogin,givePayment, setPayment,Doctorname,setDoctorName,adminLogin, setAdminLogin]}>
 
      <BrowserRouter>
      <div className="app-container">
        <Nevbar />
        <Routes>
         {(login||sessionStorage.getItem('normaluser'))?<> <Route path="/profile" element={<Profile />} />
          <Route path="/delete/:id" element={<DeleteReport/>} />
          <Route path="/uploadFIle" element={<UserUploadFile />} />
          <Route path="/viewReport/:id" element={<Load />} /> <Route path="/EdiProfile" element={<EditProfile />} /></>:    null }
        {(docLogin ||sessionStorage.getItem('doctor'))?<><Route path="/profileDoc" element={<DoctorProfile />} />
          <Route path="/viewReport/:id" element={<Load />} /></>:null }
         
 {  (adminLogin||sessionStorage.getItem('admin'))?  <> <Route path="/profileAdmin" element={<AdminProfile />} />
          <Route path="/deleteDoctor/:id" element={<DeleteDoc/>} />
          <Route path="/doctorDeatails" element={<DoctorDeatails/>} /></>    
         :null}
         
          {/* <Route path="/Payment" element={<Payment/>} /> */}
         
         
         
          {/* <Route path="/Doctor" element={<Doctor/>} /> */}
          <Route path="/DonnerReg" element={<BloodDonner/>} />
          <Route path="/FindBlood" element={<FindBlood/>} />
{<><Route path="/signup" element={<User />} />
          <Route path="/login" element={<Login />} /></> }
       
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      </BrowserRouter>
      <Footer/>
    </userContext.Provider>
  );
}

export default App;
