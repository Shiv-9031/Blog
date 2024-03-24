import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
//import context
import UserContext from "./pages/context/UserContext.jsx";
//import  pages
import Login from "./pages/Login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <UserContext>
              <Home />
            </UserContext>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/signin"
          element={
            <UserContext>
              <Login />
            </UserContext>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
