import React from "react";
import { Link } from "react-router-dom";
import PageNotFoundImage from "../../Assets/404.png";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.noBlogDiv}>
      <div className={styles.left}>
        <h3>Page not found</h3>
        <h3>
          <Link style={{ textDecoration: "none", color: "#619cec" }} to="/">
            Let's go Home
          </Link>
        </h3>
      </div>
      <div className={styles.right}>
        <img src={PageNotFoundImage} alt="Page not found" />
      </div>
    </div>
  );
};

export default PageNotFound;
