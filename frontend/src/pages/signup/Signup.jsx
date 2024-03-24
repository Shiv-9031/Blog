import React from "react";
import Layout from "../../component/Layout/Layout.jsx";
import { useNavigate } from "react-router-dom";
//import toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  phone: "",
};

function Signup() {
  //using hooks

  const [signupData, setSignupData] = React.useState(initialCredentials);
  const [existedUsername, setExistedUsername] = React.useState(false);
  const navigate = useNavigate();

  //functions

  const onHandleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const sendCredentials = async () => {
    //validate the sign up form
    if (
      signupData.name === "" ||
      signupData.username === "" ||
      signupData.email === "" ||
      signupData.password === "" ||
      signupData.phone === ""
    ) {
      toast.error(" please complete the form");
    } else {
      let response = await api_post_service("register", signupData);

      if (!response.data.success) {
        toast.error(response.data.message);
      } else {
        toast.success(response.data.message);
        setSignupData(initialCredentials);
        navigate("/signin");
      }
    }
  };

  async function isUsernameExisted() {
    const isusernameExisted = await api_post_service(
      "isusernameexisted",
      signupData
    );

    isusernameExisted.data.success
      ? setExistedUsername(true)
      : setExistedUsername(false);
  }
  React.useEffect(() => {
    isUsernameExisted();
  }, [signupData.username]);

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
            {existedUsername && (
              <p
                style={{
                  float: "right",

                  marginTop: "-30px",
                  fontSize: "12px",
                  color: "red",
                }}
              >
                username already existed
              </p>
            )}
          </span>
          <span>
            <BsFillTelephoneForwardFill size={"20px"} />
            <input
              type="tel"
              name="phone"
              placeholder="Contact Number"
              onChange={(e) => {
                onHandleChange(e);
              }}
              value={signupData.phone}
              required
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
