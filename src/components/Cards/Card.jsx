import React from "react";
import "./Card.scss";

function Card({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default Card;
