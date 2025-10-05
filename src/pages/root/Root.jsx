import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
