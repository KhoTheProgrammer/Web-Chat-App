import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/" element={<Signup></Signup>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
