import React from "react";
import styles from "./Business.module.css";

const Business = () => {
  return (
    <div className={styles.business}>
      <h2>Collaborate with BlogBook</h2>
      <h5>Would you like to write posts for BlogBook and get paid?</h5>
      <form className={styles.form}>
        <p>Please fill the following details</p>
        <input type="text" placeholder="Enter your Name" />
        <input type="email" placeholder="Enter your email ID" />
        <input type="tel" placeholder="Enter your contact number" />
        <textarea rows="10" cols="15" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Business;
