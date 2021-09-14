import React, { useContext, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Context } from "../../Context/Context";
import DropdownItem from "./DropdownItem";

const DropdownMenu = () => {
  const { activeMenu } = useContext(Context);

  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        className="menu-primary"
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            // leftIcon={"left"}
            // rightIcon={"right"}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        className="menu-secondary"
      >
        <div className="menu">
          <DropdownItem leftIcon="back" goToMenu="main" />
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
