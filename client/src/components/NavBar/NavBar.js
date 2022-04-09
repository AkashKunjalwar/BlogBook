import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const location = useLocation();
  return (
    <nav
      className={location.pathname !== "/" ? styles.navLocation : styles.nav}
    >
      <ul>
        <li>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/createblog"
          >
            Create Blog
          </Link>
        </li>
        <li>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to="/gallery"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/business"
          >
            Business
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/userprofile"
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
