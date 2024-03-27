import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../component/Layout/Layout";

function Home() {
  const usersInfo = useSelector((state) => state.user);
  console.log(usersInfo.users.isuserName);
  return (
    <Layout>
      <h1>Home page</h1>
    </Layout>
  );
}

export default Home;
