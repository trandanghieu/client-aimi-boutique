import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
