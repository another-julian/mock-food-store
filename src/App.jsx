import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import PizzaList from "./components/PizzaList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<PizzaList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
