import React from "react";

const FoodCard = ({ image, name, description, price }) => {
  return (
    <div className="food-card">
      <img src={image} alt={name} className="food-card-image" />
      <div className="food-card-content">
        <span className="food-card-name">{name}</span>
        <p className="food-card-description">{description}</p>
        <div className="food-card-footer">
          <p className="food-card-price">${price}</p>
          <button
            className="food-card-button"
            onClick={(e) => {
              console.log("click");
              e.preventDefault(); // Evita que el enlace se active
              e.stopPropagation(); // Evita que el evento burbujee al <a>
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
