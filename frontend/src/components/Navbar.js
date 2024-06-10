import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/image/Logo.png"

export const Navbar = () => {
  return (
    <div className="navbar">
        <Link className="logo" to="/Home"><img src={logo} height={80} width={120}/> </Link>
      <div className="links">
        <Link to="/Home"> Home </Link>
        <Link to="/EventCreation"> Create Event </Link>
        <Link to="/Analytics"> Analytics </Link>
        <Link to="/RSVP"> RSVP </Link>
        <Link to="/ContactUs"> Contact Us </Link>
        <Link to="/Researcher"> Student </Link>
        <Link to="/"> Logout </Link>
      </div>
    </div>
  );
};
