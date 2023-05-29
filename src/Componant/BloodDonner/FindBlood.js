import React, { useEffect, useState } from "react";
import "./FindBlood.css";

const FindBlood = () => {
  const [donor, setDonor] = useState([]);
  const [search, setSearch] = useState("");
  const [searchCity, setSearchCity] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/BloodDonner/AllDonner", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setDonor(res));
  }, []);

  return (
    <div className="bloodbody">
      <div className="container textColor">
        <br />
        <div className="text-left">
          <h5 className="Bongo text-4xl font-blod font-serif">
            Blood Donor List
          </h5>
          <br />
          <h5 className="Care text-xl font-blod font-serif">
            Blood Group
          </h5> 
          <div className="relative inline-block w-full sm:w-64 ">
   
            <select
              className="text-black searchbar border-black block appearance-none w-full"
              type="text"
              placeholder="Blood Group"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            >
              <option></option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
           
          </div>
          <br />
        
          <h5 className=" Care text-xl font-blod font-serif">
          City
          </h5> 
          
          <div className="relative inline-block w-full sm:w-64 ">
          
            <select
              className="text-black searchbar border-black block appearance-none w-full"
              type="text"
              placeholder="City"
              onChange={(event) => {
                setSearchCity(event.target.value);
              }}
            >
              <option></option>
              <option>Sylhet</option>
              <option>Dhaka</option>
              <option>Mymensingh.</option>
              <option>Rajshahi.</option>
              <option>Barisal</option>
              <option>Kulna</option>
              <option>Chittagong</option>
              <option>Comilla</option>
            </select>
         
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="container pr-4 pl-4 ">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Group</th>
                <th scope="col">City</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
            {donor &&
  donor
    .filter((data) => {
      if (search === "" && searchCity === "") {
        return data;
      }
      else if (
        (search === "" )&&
        (searchCity !== "" && data.city?.toLowerCase() === searchCity.toLowerCase())
      ) {
        return data;
      }
      else if (
        (search !== "" && data.group?.toLowerCase() === search.toLowerCase())&&
        (searchCity ==="")
      ) {
        return data;
      }
      else if (
        (search !== "" && data.group?.toLowerCase() === search.toLowerCase()) &&
        (searchCity !== "" && data.city?.toLowerCase() === searchCity.toLowerCase())
      ) {
        return data;
      }
      
    })
    .map((data, key) => (
      <tr key={key}>
        <td>{data.name}</td>
        <td>{data.group}</td>
        <td>{data.city}</td>
        <td>{data.phone}</td>
        <td className="overflow-auto">{data.email}</td>
      </tr>
    ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindBlood;
