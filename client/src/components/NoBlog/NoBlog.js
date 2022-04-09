import React from "react";
import { Link } from "react-router-dom";
import noBlog from "../../Assets/NoBlogImage.png";
import styles from "./NoBlog.module.css";

const NoBlog = () => {
  return (
    <div className={styles.noBlogDiv}>
      <div className={styles.left}>
        <h3>
          No Blogs yet <i className="fa-regular fa-face-frown-open"></i>
        </h3>
        <h3>
          <Link
            style={{ textDecoration: "none", color: "#619cec" }}
            to="/createblog"
          >
            Create a blog
          </Link>
        </h3>
      </div>
      <div className={styles.right}>
        <img src={noBlog} alt="No Blog" />
      </div>
    </div>
  );
};

export default NoBlog;
