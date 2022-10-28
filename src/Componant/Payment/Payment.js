import React from 'react';
import { Link } from 'react-router-dom';
import Bikash from '../image/Bikash.png';
import Nogot from '../image/Nogot.png';
import Rocket from '../image/Rocket.png';
import SureCash from '../image/SureCash.jpg';
import './Payment.css';
const Payment = () => {
    return (
        <div className="container">
            <h1 className="d-flex justify-content-center">Mobile Banking</h1>
          <div className="row d-flex justify-content-center">
  <div className="col-sm-6">
    <Link to="/doctorDeatails">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
            <img src={Bikash} alt="" />
        </h5>

    
      </div>
    </div>
    </Link>
  </div>
  <div className="col-sm-6">
  <Link to="/doctorDeatails">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
            <img src={Nogot} alt="" />
        </h5>
        
      
      </div>
    </div>
    </Link>
  </div>
  <div className="col-sm-6">
  <Link to="/doctorDeatails">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
            <img src={Rocket} alt="" />
        </h5>
      </div>
      
    </div>
    </Link>
  </div>
  <div className="col-sm-6">
  <Link to="/doctorDeatails">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
            <img src={SureCash} alt="" />
        </h5>
        
      
      </div>
    </div>
    </Link>
  </div>
</div>

        </div>
    );
};

export default Payment;