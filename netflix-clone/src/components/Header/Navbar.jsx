import React, { useEffect, useState } from "react";
import NetflixLogo from "../../assets/_netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./header.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${show ? "navbar--black" : ""}`}>
      <div className="navbar__container">
        <div className="navbar__left">
          <img src={NetflixLogo} alt="Netflix Logo" className="navbar__logo" />
          <ul className="navbar__links">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="navbar__right">
          <SearchIcon className="navbar__icon" />
          <NotificationsNoneIcon className="navbar__icon" />
          <AccountBoxIcon className="navbar__icon" />
          <ArrowDropDownIcon className="navbar__icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
