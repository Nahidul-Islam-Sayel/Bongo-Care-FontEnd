import React, { useState } from 'react';
import './UserUploadFile.css';
const UserUploadFile = () => {
  const[Info,setInfo]= useState({});
  const[file,setFile]=useState(null);
  const handleBlur=(e)=>{
    const newInfo ={...Info};
    newInfo[e.target.name]=e.target.value;
    console.log(newInfo)
    setInfo(newInfo);
  }
  const handleFileChange=e=>{
      const newFile= e.target.files[0];
      setFile(newFile);
  }
  const handleSubmit=e=>{
e.preventDefault() ;
    const formData = new FormData()
    formData.append('File', file)
    formData.append('name', Info.name)
    formData.append('testName', Info.testName)
    formData.append('date', Info.date)
    console.log(Object.fromEntries(formData))
    fetch('http://localhost:5000/Upload/UserReport', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      alert(data.msg)
    })
    .catch(error => {
      console.error(error)
    })
  }
    return (
        <div class="account">
        <div class="login">
            <form onSubmit={handleSubmit}>
              <h2>Upload Your File</h2>
              <input
                type="text"
                name="name"
                           
                onBlur={handleBlur}
                placeholder="User Name"
                required
              />  
                  <label for="cars">Choose a TestName:</label>

<select  id="cars" type="text"   name="testName" onBlur={handleBlur}>
  <option value="2D Echo">2D Echo</option>
  <option value="4D Sca">4D Scan</option>
  <option value="ACTH (Adreno Corticotropic Hormone) Test">ACTH (Adreno Corticotropic Hormone) Test</option>
  <option value="Adenosine Deaminase Test">Adenosine Deaminase Test</option>
  <option value="Blood Culture Test">Blood Culture Test</option>
  <option value="Blood Sugar Test">Blood Sugar Test</option>
  <option value="Blood Urea Nitrogen Test">Blood Urea Nitrogen Test</option>
  <option value="ECG">ECG</option>
  <option value="Electrolytes Test">Electrolytes Test</option>
  <option value="Hepatitis A Test">Hepatitis A Test</option>
  <option value="Hepatitis E Test">Hepatitis E Testt</option>
  <option value="HIV Test">HIV Test</option>
  <option value="LDH (Lactate Dehydrogenase) Test">LDH (Lactate Dehydrogenase) Test</option>
  <option value="Liver Function Test (LFT)">Liver Function Test (LFT)</option>
  <option value="">MRI Scan</option>
  <option value="Protein Test">Protein Test</option>
  <option value="Sodium Test">Sodium Test</option>
  <option value="TB Test">TB Test</option>
  <option value="Urine Culture">Urine Culture</option>
  <option value="X-Ray">X-Ray</option>
</select>
              
              <input
              type="date"
              name="date"
       
              onBlur={handleBlur}
              placeholder="date"
              required
            />         
             <input
                type="file"
                name="img"     
                onChange={handleFileChange}
                placeholder="Upload Jpg png Jpeg Image"
                required
              />            
              <button type="submit" name="reg" value="submit">
                <b>Upload File</b>
              </button>
            </form>
        
        </div>
      </div>
    );
};

export default UserUploadFile;