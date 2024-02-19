import React, { useContext } from "react";

import Card from "../Cards/Card";
import SortButton from "../SortButton/SortButon";
import { handleSort } from "../../utils/sortUtils";
import { AppContext } from "../../context/AppConte";

function Favorite() {
  const { favoriteDate, setFavoriteData } = useContext(AppContext);

  const handleSortData = (direction) => {
    const sortedData = handleSort(favoriteDate, direction);
    setFavoriteData(sortedData);
  };
}

return (
  <main className="main-container">
    <SortButton handleSortData={handleSortData} />

    {favoriteDate.map((item) => (
      <Card
        key={item.title}
        title={item.title}
        description={item.description}
        handleCardButton={() => {}}
      />
    ))}
  </main>
);

export default Favorite;
