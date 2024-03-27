import "./Header.css";

import React from "react";
//importing react-icons
import { PiSignOut } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuPenSquare } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

import { HeaderData } from "./HeaderData.mjs";
import { api_get_service } from "../../util/service.mjs";
import { useSelector, useDispatch } from "react-redux";
import { userInfo } from "../../Redux/userSlice";

function Header() {
  //hooks are used
  const dispatch = useDispatch();
  const [clickProfile, setclickProfile] = React.useState(false);
  const [headerProfPic, setHeaderProfPic] = React.useState("");
  const userInfos = useSelector((state) => state.user);
  const token = userInfos.users.token;

  //get profile pic
  async function getAvatar() {
    try {
      if (userInfos.users.isuserName) {
        let response = await api_get_service(
          `/get-image/${userInfos.users.isuserName._id}`,
          token
        );
        setHeaderProfPic(
          `http://localhost:5000/api/v1/${response?.data.profilePic}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  //clear local storage
  function clearlocalStorage() {
    dispatch(userInfo({}));
  }

  // using useEffect hooks
  React.useEffect(() => {
    getAvatar();
  }, [headerProfPic]);
  return (
    <div className="header_container">
      <div className="header_logo">
        <Link to={"/"}>
          <h1>.blog</h1>
        </Link>
      </div>
      <div className="header_items">
        <ul>
          {!token ? (
            <>
              <li>
                <Link to={"/signin"}>Sign in</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"/write"}>
                  <LuPenSquare size={"25px"} />
                  Write
                </Link>
              </li>
              <li>
                <Link to={"/notifications"}>
                  <IoIosNotificationsOutline size={"35px"} />
                </Link>
              </li>
              <li
                onClick={() => {
                  setclickProfile(!clickProfile);
                }}
              >
                <Link>
                  <img src={headerProfPic} alt="profile photo" />
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {clickProfile && (
        <div className="profile-menu">
          {HeaderData.map((data, index) => (
            <Link to={data.path} key={index}>
              {" "}
              {data.logo}
              {data.name}
            </Link>
          ))}
          <Link
            to={"/signin"}
            onClick={() => {
              clearlocalStorage();
            }}
          >
            <PiSignOut size={"24px"} />
            sign out
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
