import React from "react";
import "./style.css";
import { completeTodo } from "./crudOperations";

const DoneIcon = ({ todo, setTodos }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="grey"
      className="bi bi-check-circle-fill done-icon"
      viewBox="0 0 16 16"
      onClick={() => {
        completeTodo(todo, setTodos);
      }}
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </svg>
  );
};

export default DoneIcon;
