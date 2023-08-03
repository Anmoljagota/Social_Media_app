import React from "react";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Componenets/Navbar/Navbar";
import { shallowEqual, useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      {localStorage.getItem("token") && (
        <Navbar maincss=" flex flex-row justify-center lg:gap-12 gap-5 items-center font-medium text-[#474d6a] text-lg min-h-[72px] lg:w-[85%] w-[95%] m-[auto]" />
      )}
      <AllRoutes />
    </div>
  );
}

export default App;
