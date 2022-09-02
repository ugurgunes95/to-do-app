import React from "react";
import DoneIcon from "./DoneIcon";

const Todo = ({ todo }) => {
  return (
    <span className="badge badge-pill badge-dark px-4 py-2 w-100 text-left">
      <h4 className="mt-2">
        {todo.isCompleted ? "" : <DoneIcon />}
        <span className="ml-3">{`${todo.content} `}</span>
      </h4>
    </span>
  );
};

export default Todo;
