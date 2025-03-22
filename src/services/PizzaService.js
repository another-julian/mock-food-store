import { API_URL, HEADERS } from "../config";

// 📌 Get all pizzas
export const get = () => {
  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch pizzas");
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching pizzas:", error);
      throw error;
    });
};

// 📌 Get pizza by id
export const getById = (id) => {
  return fetch(`${API_URL}/${id}`)
    .then((response) => {
      if (!response.ok) throw new Error("Pizza not found");
      return response.json();
    })
    .catch((error) => {
      console.error(`Error fetching pizza with ID ${id}:`, error);
      throw error;
    });
};

// 📌 Add a new pizza (Create)
export const add = (newPizza) => {
  return fetch(API_URL, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(newPizza),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Failed to add pizza");
      return response.json();
    })
    .catch((error) => {
      console.error("Error adding pizza:", error);
      throw error;
    });
};

// 📌 Update a pizza
export const update = (id, pizzaUpdated) => {
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: HEADERS,
    body: JSON.stringify(pizzaUpdated),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Failed to update pizza");
      return response.json();
    })
    .catch((error) => {
      console.error(`Error updating pizza with ID ${id}:`, error);
      throw error;
    });
};

// 📌 Delete a pizza
export const deletePizza = (id) => {
  return fetch(`${API_URL}/${id}`, { method: "DELETE" })
    .then((response) => {
      if (!response.ok) throw new Error("Failed to delete pizza");
    })
    .catch((error) => {
      console.error(`Error deleting pizza with ID ${id}:`, error);
      throw error;
    });
};
