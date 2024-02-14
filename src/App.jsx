import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { mockData } from "./mockData";
import Navbar from "./components/Navbar/Navbar";
import MyCard from "./components/MyCard/MyCard";
import Main from "./components/Main/Main";
import "./App.scss";

function App() {
  const [cardData, setCardData] = useState([]);
  const [data, setData] = useState(mockData);

  const handleAddToCard = (item) => {
    setCardData([item, ...cardData]);

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
            <Main
              data={data}
              setData={setData}
              handleAddToCard={handleAddToCard}
            />
          }
        />

        <Route
          path="/my-card"
          element={
            <MyCard
              cardData={cardData}
              setCardData={setCardData}
              handleRemoveFromCard={handleRemoveFromCard}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
