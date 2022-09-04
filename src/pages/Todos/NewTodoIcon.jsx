import React from "react";
import "./style.css";

const NewTodoIcon = ({ setAdd }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="white"
      className="bi bi-plus-circle-fill new-icon"
      viewBox="0 0 16 16"
      onClick={() => setAdd((prev) => !prev)}
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
    </svg>
  );
};

export default NewTodoIcon;
