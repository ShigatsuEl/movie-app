import React from "react";
import { Link } from "react-router-dom";
import "./Navigator.css";

function Navigation() {
  return (
    <div className="navigation__container">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
