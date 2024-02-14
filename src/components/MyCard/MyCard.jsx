import React from "react";
import Card from "../Cards/Card";
import { handleSort } from "../../utils/sortUtils";
import SortButton from "../SortButton/SortButon";

function MyCard({ cardData, setCardData, handleRemoveFromCard }) {
  const handleSortData = (direction) => {
    const sortedData = handleSort(cardData, direction);
    setCardData(sortedData);
  };

  return (
    <main className="container">
      <SortButton handleSortData={handleSortData} />

      {cardData.map(({ title, description }) => (
        <Card
          key={title}
          title={title}
          description={description}
          handleCardButton={handleRemoveFromCard}
          card={true}
        />
      ))}
    </main>
  );
}

export default MyCard;
