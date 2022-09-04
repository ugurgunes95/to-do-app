import React from "react";
import DoneIcon from "./DoneIcon";
import XIcon from "./XIcon";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";

const Todo = ({ todo, setTodos, setEdit, setSelected }) => {
  return (
    <div className="card bg-dark p-2">
      <div className={todo.isCompleted ? "card-body done-text" : "card-body"}>
        <span className="text-center">{`${todo.content} `}</span>
      </div>
      <div className="card-footer text-center">
        {todo.isCompleted ? (
          <XIcon todo={todo} setTodos={setTodos} />
        ) : (
          <DoneIcon todo={todo} setTodos={setTodos} />
        )}
        <span className="delete-icon ml-5">
          <EditIcon
            todo={todo}
            setTodos={setTodos}
            setEdit={setEdit}
            setSelected={setSelected}
          />
        </span>
        <span className="delete-icon ml-5">
          <DeleteIcon id={todo.id} setTodos={setTodos} />
        </span>
      </div>
    </div>
  );
};

export default Todo;
// <span className="badge badge-pill badge-dark px-4 py-2 w-75 text-left mb-3">
//         <span className={todo.isCompleted ? "mt-2 h3 done-text" : "mt-2 h3"}>
//           {todo.isCompleted ? (
//             <XIcon todo={todo} setTodos={setTodos} />
//           ) : (
//             <DoneIcon todo={todo} setTodos={setTodos} />
//           )}
//           <span className="ml-3 text-center">{`${todo.content} `}</span>
//         </span>
//       </span>
//       <span className="delete-icon w-25">
//         <DeleteIcon id={todo.id} setTodos={setTodos} />
//       </span>
