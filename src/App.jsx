import React, { useState } from "react";
import DropdownMenu from "./components/navbar/DropdownMenu";
import Navbar from "./components/navbar/Navbar";
import NavItem from "./components/navbar/NavItem";
import { Context } from "./Context/Context";
import Homepage from "./pages/Homepage";
import Mintpage from "./pages/Mintpage";

const App = () => {
  const [activeMenu, setActiveMenu] = useState("main");

  return (
    <div>
      <Context.Provider value={{ activeMenu, setActiveMenu }}>
        <Navbar>
          <NavItem location="H0m3" />
          <NavItem location="M1n7" />
          <NavItem location="4b0u7" />
        </Navbar>
        <Homepage />
        <Mintpage />
      </Context.Provider>
    </div>
  );
};

export default App;
