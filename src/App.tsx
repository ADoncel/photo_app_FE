import React from "react";
import "./App.css";
import Login from "./page/Login/Login";
import Album from "./component/Album/Album";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/user" element={<Album />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
