import "./styles.css";
import { css } from "@emotion/css";
import NavBar from "./Components/NavBar";
import CenterBody from "./Components/CenterBody";
import {
  TravelerEffect,
  MosaicGroundEffect,
  OceanEffect,
  RainEffect,
  SeaWaveEffect,
  SnowFallEffect,
  SnowFallSlowEffect,
  SpacingEffect,
  CloudWaveEffect
} from "react-background-animation";

export default function App() {
  return (
      <>
        <NavBar />
        <CenterBody />
        <CloudWaveEffect />
      </>
  );
}