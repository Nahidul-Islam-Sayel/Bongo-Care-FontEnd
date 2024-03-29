import React, { useEffect, useState } from "react";
import './UserUploadFile.css';
const UserUploadFile = () => {
  const name = sessionStorage.getItem('username');
  const[Info,setInfo]= useState({});
  const[file,setFile]=useState(null);
  const [visible, setVisible] = useState(false);
  const [visibleR, setVisibleR] = useState(false);
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
    formData.append('name', name )
    formData.append('testName', Info.testName)
    formData.append('date', Info.date)
    console.log(Object.fromEntries(formData))
    fetch('http://localhost:5000/Upload/UserReport', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
     if(data.msg==="Filed to upload image")
     setVisibleR(true);
     else
      setVisible(true);
    })
    .catch(error => {
      
    })
  }
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
      <div class="flex items-center min-h-screen p-4 bg-gray-100 justify-center">
           <div
        className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${
          visible ? '' : 'hidden'
        }`}
      >
         <div className="max-w-xl w-full bg-green-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
       File Upload Successful
       
       
      </div>
      </div>
      <div
        className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${
          visibleR ? '' : 'hidden'
        }`}
      >
         <div className="max-w-xl w-full bg-red-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
         You have already uploaded this file
       
       
      </div>
      </div>
         <div
                class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
            >
       <div class="p-5 bg-white md:flex-1">
            <form onSubmit={handleSubmit}  class="flex flex-col space-y-5">
            <h3 class="my-4 text-2xl font-semibold text-gray-700">Upload File</h3>
            
                  <label for="cars">Choose a TestName:</label>

<select  id="cars" type="text"   name="testName" onBlur={handleBlur}  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" required>
<option ></option>
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
              class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              onBlur={handleBlur}
              placeholder="date"
              required
            />         
             <input
                type="file"
                name="img"     
                onChange={handleFileChange}
                placeholder="Upload Jpg png Jpeg Image"
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                required
              />            
              <button type="submit" name="reg" value="submit"  class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                <b>Upload File</b>
              </button>
            </form>
        
        </div>
      </div>
      </div>
    );
};

export default UserUploadFile;