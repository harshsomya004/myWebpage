import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";
import NavBar from "../components/NavBar";
import MainAnimation from "../components/NavBarBackground/MainAnimation";

export default function Blogs() {
  return (
    <>
      <NavBar />
      <h1
        className={css`
          flex: 1;
          font-size: 35px;
          font-weight: bold;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          padding: 12px;
          color: #006bb8;
          justify-content: center;
          text-align: center;
        `}
      >
        Blogs
      </h1>
      <h1
        className={css`
          flex: 1;
          font-size: 24px;
          font-weight: bold;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          padding: 12px;
          color: #ff5e5b;
          justify-content: center;
          text-align: center;
        `}
      >
        As Soon as something worthy writing hits my mind, It will be up here!
      </h1>
      <MainAnimation />
    </>
  );
}
