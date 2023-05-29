import React from 'react';
import { AiFillLinkedin, AiFillMobile, AiFillTwitterCircle, AiOutlineMail } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import bondulogo from "../image/Logo.jpg";
import './Footer.css';
const Footer = () => {
    return (
        <div className="footerfullbody">
            <div className="footer-bg">
                <div className="container upside row">
                    <br />
                    <br />
                    <br />
                    <div className="col-xl-3">
                        <br /> <br />
                        <img src={bondulogo} alt="" className="h-32 w-32" />
                    </div>
                    <div className="col-xl-6 contractinfofooter">
                        <br />
                        <br />
                        <br />
                        <h2>Have a Questions?</h2>
                        <p><AiOutlineMail />nahidulislamsayel@gmail.com</p>
                        <p><AiFillMobile />01780782261</p>
                    </div>

                    <div className="col-xl-3">
                        <br />
                        <br />
                        <br />
                        <h5>FOLLOW US</h5>
                        <BsFacebook className="socialicon" />
                        <AiFillLinkedin className="socialicon" />
                        <AiFillTwitterCircle className="socialicon" />
                    </div>

                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>


            <div className="downside">
                <div className="container">
                    <div className="row">
                        <p className="mt-3 text-white">
                            <br />
                            Copyright ©2023 All rights reserved | This template is made   by Nahidul Islam Sayel.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;