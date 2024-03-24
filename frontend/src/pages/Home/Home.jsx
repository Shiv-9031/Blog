import React from "react";
import { userInfo } from "../context/UserContext";

function Home() {
  const { account } = React.useContext(userInfo);
  console.log(account);
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}

export default Home;
