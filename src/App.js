import "./styles.css";
import "antd/dist/antd.css";
import NavBar from "./components/NavBar";
import CenterBody from "./components/CenterBody";
import MainAnimation from "./components/NavBarBackground/MainAnimation";
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
      <MainAnimation />
      <CloudWaveEffect />
    </>
  );
}
