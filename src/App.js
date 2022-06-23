import "./styles.css";
import { css } from "@emotion/css";
import NavBar from "./components/NavBar";
import CenterBody from "./components/CenterBody";
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