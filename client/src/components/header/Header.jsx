import React, { useEffect } from "react";
import logo from "../../assets/logo1.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [showResponsiveNav, setshowResponsiveNav] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setshowResponsiveNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, [window]);
  return (
    <>
      <div>
        <header>
          <div className="logo">
            <Link to="/">
              {" "}
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul id="links">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">Products</Link>
            </li>
            <li>
              <Link to="">Restaurants</Link>
            </li>
            <li>
              <Link to="">About Us</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
          </ul>
          <button>Request Invite</button>
          <div
            id="hamburger"
            onClick={() => setshowResponsiveNav(!showResponsiveNav)}
            className={showResponsiveNav ? "toggle" : ""}
          ></div>
        </header>
        <div
          className={`mobileNavs ${showResponsiveNav ? "active" : ""} `}
          id="responsiveLinks"
        >
          <ul>
            <li className="rLinks">
              <Link to="">Home</Link>
            </li>
            <li className="rLinks">
              <Link to="">Products</Link>
            </li>
            <li className="rLinks">
              <Link to="">Restaurants</Link>
            </li>
            <li className="rLinks">
              <Link to="">About Us</Link>
            </li>
            <li className="rLinks">
              <Link to="">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
