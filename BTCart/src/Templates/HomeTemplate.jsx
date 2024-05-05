import React from "react";
import HeaderHome from "../Component/HeaderHome";
import { Outlet } from "react-router-dom";
import Home from "../Pages/Home";

const HomeTemplate = () => {
  return (
    <>
      <HeaderHome></HeaderHome>

      <div className="content">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default HomeTemplate;
