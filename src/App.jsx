import React from "react";
import DropdownMenu from "./components/navbar/DropdownMenu";
import Navbar from "./components/navbar/Navbar";
import NavItem from "./components/navbar/NavItem";

const App = () => {
  return (
    console.log();
    <div>
      <Navbar>
        <NavItem location="Home" />
        <NavItem location="Mint" />
        <NavItem location="About" />

        <NavItem location="test">
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </div>
  );
};

export default App;
