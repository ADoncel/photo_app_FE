import React from "react";
import "./App.css";
import Login from "./page/Login/Login";
import Album from "./component/Album/Album";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const [user, setUser] = React.useState<string>("user");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<Album />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
