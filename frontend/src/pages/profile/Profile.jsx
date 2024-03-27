import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../component/Layout/Layout";
import { api_post_service, api_get_service } from "../../util/service.mjs";
import "./Profile.css";

function Profile() {
  const userInfo = useSelector((state) => state.user);
  //use useState hooks
  const [profilePic, setProfilePic] = React.useState("");

  //sending profile pic
  async function sendAvatar(e) {
    let formData = new FormData();
    formData.append("avatar", e.target.files[0]);
    formData.append("name", "avatar");
    formData.append("userId", userInfo.users.isuserName._id);
    let response = await api_post_service(
      "profile-pic",

      formData
    );
  }

  //get profile pic
  async function getProfileAvatar() {
    let response = await api_get_service(
      `/get-image/${userInfo.users.isuserName._id}`,
      userInfo.users.token
    );
    setProfilePic(`http://localhost:5000/api/v1/${response?.data.profilePic}`);
  }

  //using useEffect hooks
  React.useEffect(() => {
    getProfileAvatar();
  }, [profilePic]);

  return (
    <Layout>
      <div className="profile_container">
        <div className="profile_detail">
          <div className="profile_name_card">
            <h1>{userInfo.users.isuserName.name}</h1>
          </div>
        </div>
        <div className="profile_image">
          <label htmlFor="avatar">
            <img src={profilePic} alt="profile-photo" />
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept=".jpg, .jpeg, .png"
            hidden
            onChange={(e) => {
              sendAvatar(e);
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
