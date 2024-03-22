import React from "react";
import Layout from "../../component/Layout/Layout.jsx";

import { Link } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { TbPasswordFingerprint } from "react-icons/tb";
import "./Login.css";

const initialCredentials = {
  username: "",
  password: "",
};

function Login() {
  //using hooks

  const [loginData, setLoginData] = React.useState(initialCredentials);

  //functions

  const onHandleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const sendCredentials = () => {
    console.log(loginData);
    setLoginData(initialCredentials);
  };

  return (
    <Layout>
      <div className="login_container">
        <div className="login_content">
          <h1>Login to your account</h1>
          <p>
            Don't have an account ?<Link to="/signup">Sign Up Free </Link>
          </p>

          <span>
            <FaUserCheck size={"20px"} />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => {
                onHandleChange(e);
              }}
              value={loginData.username}
            />
          </span>

          <span>
            <TbPasswordFingerprint size={"20px"} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                onHandleChange(e);
              }}
              value={loginData.password}
            />
          </span>
          <button
            onClick={() => {
              sendCredentials();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
