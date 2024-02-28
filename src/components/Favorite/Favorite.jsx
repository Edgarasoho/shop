import React, { useContext, useState } from "react";

import Card from "../Cards/Card";
import SortButton from "../SortButton/SortButon";
import { handleSort } from "../../utils/sortUtils";
import { AppContext } from "../../context/AppContext";

function Favorite() {
  const { favoriteData, setFavoriteData } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");
  const handleSortData = (direction) => {
    const sortedData = handleSort(favoriteData, direction);
    setFavoriteData(sortedData);
  };

  return (
    <main className="main-container">
      <div className="favorite-action">
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
      {favoriteData
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
            handleCardButton={() => {}}
          />
        ))}
    </main>
  );
}

export default Favorite;
