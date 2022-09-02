import React from "react";
import { Home, Todos } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </section>
  );
};

export default App;
