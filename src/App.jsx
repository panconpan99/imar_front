import React from "react";
import Home from "./pages/Home";
import Board1 from "./pages/board1";
import Board2 from "./pages/board2";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Board" element={<Board1 />}/>
        <Route path="/Board2" element={<Board2 />}/>
      </Routes>
    </div>
  );
}

export default App;
