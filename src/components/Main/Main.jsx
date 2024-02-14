import React from "react";

import "./Main.scss";
import Card from "../Cards/Card";
import SortButton from "../SortButton/SortButon";
import { handleSort } from "../../utils/sortUtils";

function Main({ handleAddToCard, data, setData }) {
  const handleSortData = (direction) => {
    const sortedData = handleSort(data, direction);
    setData(sortedData);
  };

  return (
    <main className="main-container">
      <SortButton handleSortData={handleSortData} />

      {data.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          handleCardButton={handleAddToCard}
        />
      ))}
    </main>
  );
}

export default Main;
