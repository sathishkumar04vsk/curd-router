import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-link">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/employes">Employes</Link>
        </li>
        <li>
          <Link to="/employes/create">Add Employe</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li style={{ marginLeft: "auto", fontSize: "20px" }} className="login">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
