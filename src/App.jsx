import React from "react";
import Home from "./pages/Home";
import Board1 from "./pages/board1";
import Board2 from "./pages/board2";
import Register from "./pages/register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import About from "./pages/about";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Board" element={<Board1 />} />
          <Route path="/Board2" element={<Board2 />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
