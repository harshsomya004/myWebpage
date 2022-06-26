import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
import Travel from "./pages/Travel";
import About from "./pages/About";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<App />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
