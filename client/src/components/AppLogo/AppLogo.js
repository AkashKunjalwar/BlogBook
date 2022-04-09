import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./AppLogo.module.css";

const AppLogo = () => {
  const location = useLocation();
  return (
    <h1 className={location.pathname !== "/" ? styles.h1Location : styles.h1}>
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        <i className="fa-solid fa-feather-pointed"></i> BlogBook
      </Link>
    </h1>
  );
};

export default AppLogo;
