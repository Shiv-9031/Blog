import React from "react";
import Layout from "../../component/Layout/Layout.jsx";

import { FaUserCheck } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { TbPasswordFingerprint } from "react-icons/tb";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import "./Signup.css";
import { api_post_service } from "../../util/service.mjs";

const initialCredentials = {
  username: "",
  password: "",
  name: "",
  email: "",
  contact: "",
};

function Signup() {
  //using hooks

  const [signupData, setSignupData] = React.useState(initialCredentials);

  //functions

  const onHandleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const sendCredentials = () => {
    let response = api_post_service("register", signupData);
    console.log(signupData);
    setSignupData(initialCredentials);
  };

  return (
    <Layout>
      <div className="signup_container">
        <div className="signup_content">
          <h1>Sign Up</h1>

          <span>
            <TiContacts size={"20px"} />
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => {
                onHandleChange(e);
              }}
              value={signupData.name}
            />
          </span>
          <span>
            <MdEmail size={"20px"} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                onHandleChange(e);
              }}
              value={signupData.email}
            />
          </span>
          <span>
            <FaUserCheck size={"20px"} />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => {
                onHandleChange(e);
              }}
              value={signupData.username}
            />
          </span>
          <span>
            <BsFillTelephoneForwardFill size={"20px"} />
            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              onChange={(e) => {
                onHandleChange(e);
              }}
              value={signupData.contact}
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
              value={signupData.password}
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

export default Signup;
