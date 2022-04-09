import React from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import profileImage from "../../Assets/ProfilePic.jpg";

const Profile = () => {
  return (
    <div className={styles.profileDiv}>
      <div className={styles.profile}>
        <div className={styles.imageDiv}>
          <img src={profileImage} alt="profileImage" />
        </div>
        <div className={styles.userInfoDiv}>
          <h3>User Name</h3>
          <h4>Profile Name</h4>
          <p>
            Lorem Ipsum è un testo segnaposto utilizzato nel settore della
            tipografia e della stampa. Lorem Ipsum è considerato il testo
            segnaposto standard sin dal sedicesimo secolo, quando un anonimo
            tipografo prese una cassetta di caratteri e li assemblò per
            preparare un testo campione. È sopravvissuto non solo a più di
            cinque secoli, ma anche al passaggio alla videoimpaginazione,
            pervenendoci
          </p>
          <h5>Followers - 5</h5>
          <h5>Following - 5</h5>
        </div>
      </div>
      <div className={styles.editProfileImg}>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
          }}
          to="/editprofileimage"
        >
          <i className="fa-solid fa-camera"></i> Update Profile Image
        </Link>
      </div>
      <div className={styles.editProfileInfo}>
        <Link
          style={{
            textDecoration: "none",
            color: "#619cec",
          }}
          to="/editprofileinfo"
        >
          <i className="fa-solid fa-pencil"></i> Update Profile Information
        </Link>
      </div>
      <div className={styles.changePassword}>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
          }}
          to="/changepassword"
        >
          <i className="fa-solid fa-gear"></i> Change Password
        </Link>
      </div>
      <div className={styles.signout}>
        <Link
          style={{
            textDecoration: "none",
            color: "#619cec",
          }}
          to="/editprofileinfo"
        >
          <i className="fas fa-sign-out"></i> Sign Out
        </Link>
      </div>
    </div>
  );
};

export default Profile;
