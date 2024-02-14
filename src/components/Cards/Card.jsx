import React from "react";
import "./Card.scss";
import Button from "../Button/Button";

function Card({ title, description, handleCardButton, card }) {
  const handleAddToCard = () => {
    handleCardButton({ title, description, Button });
  };
  return (
    <div className="card card-container">
      <h3>{title}</h3>
      <p>{description}</p>
      <Button
        onClick={handleAddToCard}
        card={card ? "Remove from cart" : "Add to cart"}
      />
    </div>
  );
}

export default Card;
