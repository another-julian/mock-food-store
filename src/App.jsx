import React, { useEffect, useState } from "react";
import { get, deletePizza } from "./services/PizzaService";

const App = () => {
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
        setPizzas((prevPizzas) => prevPizzas.filter((pizza) => pizza.id !== id));
      })
      .catch((err) => {
        console.error("Error deleting pizza:", err);
        setError("Failed to delete pizza.");
      });
  };

  return (
    <div>
      <h2>Pizza Menu</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            name: <strong>{pizza.name}</strong> - {pizza.description} - ${pizza.price}
            <button onClick={() => handleDelete(pizza.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
