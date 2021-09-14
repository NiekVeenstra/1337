import React, { useContext } from "react";
import { Context } from "../../Context/Context";

const DropdownItem = (props) => {
  const {setActiveMenu} = useContext(Context);

  console.log(props);

  return (
    <a
      href="#"
      className="menu-item"
      onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
      <span className="icon-left">{props.leftIcon}</span>

      {props.children}

      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
};

export default DropdownItem;
