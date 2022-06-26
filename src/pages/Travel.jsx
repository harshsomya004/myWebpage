import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";
import NavBar from "../components/NavBar";
import MainAnimation from "../components/NavBarBackground/MainAnimation";

export default function Travel() {
  return (
    <>
      <NavBar />
      <MainAnimation />
    </>
  );
}
