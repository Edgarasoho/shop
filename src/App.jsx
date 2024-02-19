import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import MyCard from "./components/MyCard/MyCard";
import Main from "./components/Main/Main";
import Favorite from "./components/Favorite/Favorite";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/my-card" element={<MyCard />} />
      </Routes>
    </>
  );
}

export default App;
