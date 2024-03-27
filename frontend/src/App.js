import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";

//import  pages
import Login from "./pages/Login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/Home/Home";

import Profile from "./pages/profile/Profile";
import WriteBlog from "./pages/writeBlog/WriteBlog";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/write" element={<WriteBlog />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
