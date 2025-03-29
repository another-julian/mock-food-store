import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import { get, deletePizza } from "../services/PizzaService";

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);

  // 📌 Obtener todas las pizzas al montar el componente
  useEffect(() => {
    get()
      .then(setPizzas) // Si la promesa se resuelve, actualiza el estado
      .catch((err) => {
        console.error("Error fetching pizzas:", err);
        setError("Failed to load pizzas. Please try again later.");
      });
  }, []);

  // 📌 Eliminar una pizza
  const handleDelete = (id) => {
    deletePizza(id)
      .then(() => {
        setPizzas((prevPizzas) =>
          prevPizzas.filter((pizza) => pizza.id !== id)
        );
      })
      .catch((err) => {
        console.error("Error deleting pizza:", err);
        setError("Failed to delete pizza.");
      });
  };

  return (
    <>
      <div className="menu-header">
        <h2>The best pizzas</h2>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul className="food-list">
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <a className="ancle-card" href="">
              <FoodCard
                image={pizza.image}
                name={pizza.name}
                description={pizza.description}
                price={pizza.price}
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PizzaList;
