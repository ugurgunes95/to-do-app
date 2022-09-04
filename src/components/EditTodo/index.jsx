import React, { useState } from "react";
import { updateTodo } from "../../pages/Todos/crudOperations";
import "./style.css";

const EditTodo = ({ setEdit, selected, setTodos }) => {
  const [updated, setUpdated] = useState(selected.content);
  return (
    <div className="edit-container p-5 bg-dark">
      <h3 className="text-center my-4">Edit ToDo</h3>
      <textarea
        className=""
        placeholder="Please write at least 3 letters."
        value={updated}
        onChange={(e) => setUpdated(e.target.value)}
        minLength="3"
      ></textarea>
      <button
        className="btn btn-dark btn-block mt-3"
        onClick={() => setEdit(false)}
      >
        Cancel
      </button>
      <button
        className="btn btn-success btn-block mt-2"
        onClick={() => {
          setEdit(false);
          updateTodo(selected, setTodos, updated);
        }}
      >
        Save
      </button>
    </div>
  );
};

export default EditTodo;
