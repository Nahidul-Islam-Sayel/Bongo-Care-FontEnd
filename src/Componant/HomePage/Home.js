import React from "react";
import Card from "react-bootstrap/Card";
import {
  FcFile,
  FcImageFile,
  FcManager,
  FcPodiumWithSpeaker,
} from "react-icons/fc";
import Doctor from "../image/Doctor.jpg";
import Report from "../image/MReport.jpg";
import Patient from "../image/Patients.jpg";
import underline from "../image/Underline.png";
import secondside from "../image/secondside.png";
import "./Home.css";
const Home = () => {
  return (
    <div className="">
      <div className="firstpart">
        <div className="container row">
          <div className="col-md-5 ml-5 mt-5">
            <h1 className="text-5xl font-bold font-mono">
              {" "}
              EASY <span className="Care ">LIFE</span> <br /> WITH{" "}
              <span className="Bongo ">BONGOCARE</span>{" "}
            </h1>
            <p className="BongoCare mt-4 text-sm  ">
              Our mission is to make healthcare more accessible to every people
              in Bangladesh. We are committed to making healthcare accessible to
              every person in Bangladesh. The people of Bangladesh are
              constantly facing some kind of crisis while seeking health care
              One of these is repeating a test, not getting the blood right, of
              any size. The problem is not getting medical care at home. We will
              provide these services easily for the welfare of the people this
              is our purpose. Each person's
              account will have various health check reports. Later, when you go
              to see a doctor, the doctor can easily see those reports.
              Moreover, people can talk to the doctor through this website. If
              you need blood, you can easily contact any blood donor
            </p>
          </div>
        </div>
      </div>
      <div className="Deatails">
        <h1 className="text-center font-serif text-4xl  mt-5 ">
          <span className="Bongo">Easy</span> <span className="Care">Life</span>
        </h1>
        <img
          className="mx-auto my-auto h-12 w-60"
          src={underline}
          alt=""
          srcset=""
        />
        <div className="container">
          <div className="row mr-10 ml-10">
            <div className="col-lg-4">
              <Card>
                <Card.Img variant="top" src={Doctor} />
                <Card.Body>
                  <Card.Title>Doctor</Card.Title>
                  <Card.Text>
                    A doctor can easily view patients' medical reports by
                    logging into his account
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card>
                <Card.Img variant="top" src={Patient} />
                <Card.Body>
                  <Card.Title>Patient</Card.Title>
                  <Card.Text>
                    Patients can upload reports and view previous reports easily
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card>
                <Card.Img variant="top" src={Report} />
                <Card.Body>
                  <Card.Title>Life Time Access</Card.Title>
                  <Card.Text>
                    Patient can view his report lifetime so there is no chance
                    of data loss
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="solution-bg ">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
       
        <div className="container solution ">
          <h1 className="font-serif text-4xl  mt-5">
            {" "}
            <span className="Bongo  ">All</span>{" "}
            <span className="Care">Solution</span> <br />{" "}
            <img className=" h-12 w-60" src={underline} alt="" srcset="" />{" "}
          </h1>
          <div className="full-img container">
            <div className="row">
              <div className="col-xl-6">
                <div className="sol-one-side row">
                  <div className="col-lg-2 border-2 border-blue-950 rounded-full d-flex justify-content-center align-items-center">
                    <FcImageFile className="h-12 w-12" />
                  </div>

                  <div className="col-lg-10">
                    <h5>Medical report storage facility</h5>
                    <p>
                      A user can save all his medical reports and there is no
                      risk of losing it and there is life time access facility
                    </p>
                  </div>
                </div>
                <div className="sol-one-side row">
                  <div className="col-lg-2 border-2 border-blue-950 rounded-full d-flex justify-content-center align-items-center">
                    <FcManager className="h-12 w-12" />
                  </div>
                  <div className="col-lg-10">
                    <h5>Doctor Can View Medicle Report</h5>
                    <p>
                      Doctors can easily see medical reports so it is helpful to
                      prescribe medicine
                    </p>
                  </div>
                </div>
                <div className="sol-one-side row">
                  <div className="col-lg-2 border-2 border-blue-950 rounded-full d-flex justify-content-center align-items-center">
                    <FcFile className="h-12 w-12" />
                  </div>
                  <div className="col-lg-10">
                    <h5>Doctor Can Provide Precription</h5>
                    <p>Doctor Can Provide Patients Precription Easily</p>
                  </div>
                </div>
                <div className="sol-one-side row">
                  <div className="col-lg-2 border-2 border-blue-950 rounded-full d-flex justify-content-center align-items-center">
                    <FcPodiumWithSpeaker className="h-12 w-12" />
                  </div>
                  <div className="col-lg-10">
                    <h5>Chat With Doctor</h5>
                    <p>
                      A patient can easily send a message to a doctor if he
                      faces any problem and the doctor can send a reply to this
                      sms
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <img src={secondside} alt="" className=" h-96 w-10/12" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <br /> <br />
        <br />
        <br /> <br />
    
     
      </div>
      <div>
        <h1 className="text-center font-serif text-4xl font-blod mt-5 ">
          <span className="Bongo">We Are Here For You</span>
        </h1>
        <img
          className="mx-auto my-auto h-12 w-60"
          src={underline}
          alt=""
          srcset=""
        />
        <p className="text-center font-serif text-2xl">
          {" "}
          <span className="Care">
            Any questions? Drop us a line to learn more.
          </span>
        </p>
      </div>
      <div className="contract container  p-20 ">
        <div className="row">
          <div className="col-md-6 contractimg"></div>
          <div className="col-md-6 contractform">
            <h3>Request A Quote</h3>
            <form class="contact-form row">
              <div class="form-field col-lg-6">
                <input
                  id="name"
                  class="input-text js-input"
                  type="text"
                  required
                />
                <label class="label" for="name">
                  Name
                </label>
              </div>
              <div class="form-field col-lg-6 ">
                <input
                  id="email"
                  class="input-text js-input"
                  type="email"
                  required
                />
                <label class="label" for="email">
                  E-mail
                </label>
              </div>
              <div class="form-field col-lg-6 ">
                <input
                  id="company"
                  class="input-text js-input"
                  type="text"
                  required
                />
                <label class="label" for="company">
                  Address
                </label>
              </div>
              <div class="form-field col-lg-6 ">
                <input
                  id="phone"
                  class="input-text js-input"
                  type="text"
                  required
                />
                <label class="label" for="phone">
                  Contact Number
                </label>
              </div>
              <div class="form-field col-lg-12">
                <input
                  id="message"
                  class="input-text js-input"
                  type="text"
                  required
                />
                <label class="label" for="message">
                  Message
                </label>
              </div>
              <div class="form-field col-lg-12">
                <input class="submit-btn" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="row mt-5">
                <div className="col-md-3 img1"></div>
                <div className="col-md-3 img2"></div>
                <div className="col-md-3 img3"></div>
                <div className="col-md-3 img4"></div>
            </div>
            </div>
    </div>
  );
};

export default Home;
