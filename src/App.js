import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/add" element={ <AddPost />} />
      <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </div>
  );
};
export default App;
