import React, { useContext } from "react";
import Card from "../Cards/Card";
import { handleSort } from "../../utils/sortUtils";
import SortButton from "../SortButton/SortButon";
import { AppContext } from "../../context/AppContext";

function MyCard() {
  const { cartData, setCartData, handleRemoveFromCard } =
    useContext(AppContext);
  const handleSortData = (direction) => {
    const sortedData = handleSort(cartData, direction);
    setCartData(sortedData);
  };

  return (
    <main className="container">
      <SortButton handleSortData={handleSortData} />

      {cartData.map(({ title, description }) => (
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
