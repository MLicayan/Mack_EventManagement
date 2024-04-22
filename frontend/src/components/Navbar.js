import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
        <Link className="logo" to="/Home"> Mack's EventPlanner </Link>
      <div className="links">
        <Link to="/Home"> Home </Link>
        <Link to="/EventCreation"> Create Event </Link>
        <Link to="/Analytics"> Analytics </Link>
        <Link to="/RSVP"> RSVP </Link>
        <Link to="/ContactUs"> Contact Us </Link>
      </div>
    </div>
  );
};
