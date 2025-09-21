import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, NavLink } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NotFound from "./components/Notfound";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            backgroundColor: "ActiveBorder",
            padding: "10px",
            filter: "drop-shadow(5px 5px 10px gray)",
          }}
        >
          <NavLink style={{ textDecoration: "none",color:"white" }} to="/">Home</NavLink>
          <NavLink style={{ textDecoration: "none",color:"white" }} to="/About">About</NavLink>
          <NavLink style={{ textDecoration: "none",color:"white" }}to="/Contact">Contact</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
