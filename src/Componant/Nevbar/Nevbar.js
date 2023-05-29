import React, { useContext } from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../../App";
import logo from "../image/Logo.jpg";
import "./Nevbar.css";
const Nevbar = () => {
  const [login, setLogin, docLogin, setDocLogin, adminLogin, setAdminLogin] =
    useContext(userContext);
  console.log(login);

  const logout = () => {
    setDocLogin(0);
    setLogin(0);
    setAdminLogin(0);
    console.log(login);
    sessionStorage.clear();
  };

  return (
    <div className="navbar-container">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Brand href="#">
          <img src={logo} className="navlogo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto w-100 justify-content-end">
            {sessionStorage.getItem("login") || login === 1 ? (
              <>
                <Nav.Link as={NavLink} to="/" exact>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/uploadFile">
                  Upload File
                </Nav.Link>
                <Nav.Link as={NavLink} to="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link onClick={logout} as={NavLink} to="/">
                  Logout
                </Nav.Link>
              </>
            ) : sessionStorage.getItem("Doclogin") || docLogin === 1 ? (
              <>
                <Nav.Link as={NavLink} to="/profileDoc">
                  Profile
                </Nav.Link>
                <Nav.Link onClick={logout} as={NavLink} to="/">
                  Logout
                </Nav.Link>
              </>
            ) : sessionStorage.getItem("Admin") || adminLogin === 1 ? (
              <>
                <Nav.Link as={NavLink} to="/profileAdmin">
                  Profile
                </Nav.Link>
                <Nav.Link as={NavLink} to="/doctorDeatails">
                  Add A Doctor
                </Nav.Link>
                <Nav.Link onClick={logout} as={NavLink} to="/">
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                {" "}
                <Nav className="ml-auto w-100 justify-content-end">
                  <Nav.Link as={NavLink} to="/" exact  >
                    Home
                  </Nav.Link>
                  <NavDropdown title="Blood" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="DonnerReg">
                      Register As A Donor
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="FindBlood">
                      Need Blood
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Account" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="signup">
                      Sing Up
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="login">
                      Login
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nevbar;
