import React, { useContext, useState } from "react";
import Card from "../Cards/Card";
import { handleSort } from "../../utils/sortUtils";
import SortButton from "../SortButton/SortButon";
import { AppContext } from "../../context/AppContext";

function MyCard() {
  const { cartData, setCartData, handleRemoveFromCard } =
    useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");
  const handleSortData = (direction) => {
    const sortedData = handleSort(cartData, direction);
    setCartData(sortedData);
  };

  return (
    <main className="container">
      <div className="myCard-action">
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
      {cartData
        .filter(
          ({ title, description }) =>
            title.toLowerCase().includes(searchValue) ||
            description.toLowerCase().includes(searchValue)
        )
        .map(({ title, description }) => (
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
