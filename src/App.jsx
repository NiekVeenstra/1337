import React, { useState } from "react";
import DropdownMenu from "./components/navbar/DropdownMenu";
import Navbar from "./components/navbar/Navbar";
import NavItem from "./components/navbar/NavItem";
import { Context } from "./Context/Context";

const App = () => {
  const [activeMenu, setActiveMenu] = useState("main");



  return (
    <div>
      <Context.Provider value={{activeMenu, setActiveMenu}}>
        <Navbar>
          <NavItem location="Home" />
          <NavItem location="Mint" />
          <NavItem location="About" />

          <NavItem location="test">
            <DropdownMenu />
          </NavItem>
        </Navbar>
      </Context.Provider>
    </div>
  );
};

export default App;
