import React from "react";
import Layout from "../../component/Layout/Layout.jsx";
import { api_post_service } from "../../util/service.mjs";
import { userInfo } from "../context/UserContext.jsx";
//import react-toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link, useNavigate } from "react-router-dom";
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
  const { account, setAccount } = React.useContext(userInfo);
  const navigate = useNavigate();

  //functions

  const onHandleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const sendCredentials = async () => {
    let response = await api_post_service("login", loginData);

    //for empty login details
    if (loginData.password === "" || loginData.username === "") {
      toast.error("please fill login detail completely");
      return;
    }

    //response after login
    if (response) {
      //set credential to initialvalues
      setLoginData(initialCredentials);

      //populate data through use context hook
      await setAccount({ ...response["data"], activePrivateRoutes: true });

      //save token in localstorage
      localStorage.setItem("token", `Bearers ${response.data.token}`);

      //navigate to login page
      navigate("/");

      toast.success(`welcome ${response.data.isuserName.name}`);
    }
  };

  React.useEffect(() => {
    console.log();
  }, [account]);

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
