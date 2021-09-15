import React, { useState } from "react";
import Logo from "./Logo";

const Navbar = (props) => {
  const [navbar, setNavbar] = useState(false);

  const [open, setOpen] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 15) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <nav className={navbar ? "navbar activeNav" : "navbar"}>
      <Logo />

      <div className="navbar-burger" open={open} onClick={() => setOpen(!open)}>
        <div className={open ? " nav-open" : " line"} />
        <div className={open ? " nav-open" : " line"} />
        <div className={open ? " nav-open" : " line"} />
      </div>

      <ul className="navbar-nav">{props.children}</ul>

    </nav>
  );
};

export default Navbar;
