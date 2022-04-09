import React from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.css";
import AppLogo from "../AppLogo/AppLogo";

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <AppLogo />
      {location.pathname === "/" && <SearchBar />}
      <NavBar />
    </header>
  );
};

export default Header;
