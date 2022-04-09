import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright BlogBook @{new Date().getFullYear()}</p>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-pinterest"></i>
    </footer>
  );
};

export default Footer;
