import React from "react";

const FoodList = ({ foods }) => {
  return (
    <div>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
