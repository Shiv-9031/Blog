import "./App.css";
import Login from "./pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
