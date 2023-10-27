import React from "react";
import "./App.css";
import Login from "./page/Login/Login";
import Album from "./component/Album/Album";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<Album />} />
      </Routes>
    </div>
  );
}

export default App;
