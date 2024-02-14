import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { mockData } from "./mockData";
import Navbar from "./components/Navbar/Navbar";
import MyCard from "./components/MyCard/MyCard";
import Main from "./components/Main/Main";
import "./App.scss";

function App() {
  const [data, setData] = useState(mockData);
  const [cardData, setCardData] = useState([]);

  const handleAddToCard = (item) => {
    setCardData([...cardData, item]);
    const filteredData = data.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setData(filteredData);
  };
  const handleRemoveFromCard = (item) => {
    setData([...data, item]);
    const filterCardData = cardData.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setCardData(filterCardData);
  };
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Main data={data} setData={setData} setCardData={handleAddToCard} />
          }
        />

        <Route
          path="/my-card"
          element={
            <MyCard cardData={cardData} setCardData={handleRemoveFromCard} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
