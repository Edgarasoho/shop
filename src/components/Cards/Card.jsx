import React from "react";
import "./Card.scss";

function Card({ title, description, setCardData, Card }) {
  const handleAddToCard = () => {
    setCardData({ title, description });
  };
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleAddToCard}>
        {Card ? "Remove from card" : "Add to card"}
      </button>
    </div>
  );
}

export default Card;
