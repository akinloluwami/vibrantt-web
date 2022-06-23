import React from "react";
import { Link } from "react-router-dom";
import logo_wbg from "../../assets/v_white.png";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <img src={logo_wbg} alt="logo" />
        </Link>
        <Link to="/docs">Docs</Link>
      </div>
      <div className="right">
        <button>Buy Me A Cofee</button>
      </div>
    </div>
  );
}

export default Navbar;
