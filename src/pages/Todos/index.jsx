import React, { useEffect, useState } from "react";
import { Header, Footer, User, AddTodo, EditTodo } from "../../components";
import Todo from "./Todo";
import "./style.css";
import { getTodos } from "./crudOperations";
import NewTodoIcon from "./NewTodoIcon";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    getTodos(setTodos);
  }, []);

  return (
    <>
      <Header />
      <hr />
      {add && (
        <AddTodo id={todos.length + 1} setTodos={setTodos} setAdd={setAdd} />
      )}
      {edit && (
        <EditTodo setEdit={setEdit} selected={selected} setTodos={setTodos} />
      )}
      <NewTodoIcon setAdd={setAdd} />
      <div className="todo-container">
        <ul className="px-4">
          {todos.length > 0 ? (
            todos.map((value, index) => (
              <li key={index} className="list-item m-3">
                <Todo
                  todo={value}
                  setTodos={setTodos}
                  setEdit={setEdit}
                  setSelected={setSelected}
                />
              </li>
            ))
          ) : (
            <p className="text-center mt-5">There isn't anything to do!</p>
          )}
        </ul>
      </div>
      <User />
      <Footer />
    </>
  );
};

export default Todos;
