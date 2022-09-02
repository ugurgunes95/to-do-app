import React, { useState } from "react";
import { Header, Footer } from "../../components";
import Todo from "./Todo";
import "./style.css"

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: "asdasd", isCompleted: false },
  ]);

  return (
    <>
      <Header />
      <hr />
      <ul className="px-4">
        {todos.map((value, index) => (
          <li key={index} className="list-item">
            <Todo todo={value} />
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
};

export default Todos;
