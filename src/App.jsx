import React from "react";
import Home from "./pages/Home";
import Board1 from "./pages/board1";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Board" element={<Board1 />}/>
      </Routes>
    </div>
  );
}

export default App;
