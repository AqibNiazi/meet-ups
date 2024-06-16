import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Layout from "./layout";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default AppLayout;
