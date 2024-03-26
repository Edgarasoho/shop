import React, { useContext, useState } from "react";

import "./Main.scss";
import Card from "../Cards/Card";
import SortButton from "../SortButton/SortButon";
import { handleSort } from "../../utils/sortUtils";
import { AppContext } from "../../context/AppContext";

function Main() {
  const { data, setData, handleAddToCard } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSortData = (direction) => {
    const sortedData = handleSort(data, direction);
    setData(sortedData);
  };

  return (
    <main className="my-container">
      <div className="container-actions">
        <SortButton handleSortData={handleSortData} />
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value.toLowerCase());
          }}
        />
      </div>
      {data
        .filter(
          ({ title, description }) =>
            title.toLowerCase().includes(searchValue) ||
            description.toLowerCase().includes(searchValue)
        )
        .map((item) => (
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
