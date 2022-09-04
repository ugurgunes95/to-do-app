import React, { useState } from "react";
import { addTodo } from "../../pages/Todos/crudOperations";
import "./style.css";

const AddTodo = ({ id, setTodos, setAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="add-container p-5 bg-dark">
      <h3 className="text-center my-4">New ToDo</h3>
      <textarea
        className=""
        placeholder="Please write at least 3 letters."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        minLength="3"
      ></textarea>
      <button
        className="btn btn-outline-light btn-block mt-3"
        onClick={() => setAdd(false)}
      >
        Cancel
      </button>
      <button
        className="btn btn-success btn-block mt-2"
        onClick={() => {
          addTodo(id, newTodo, setTodos);
          setAdd(false);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
