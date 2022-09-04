import axios from "axios";

const getTodos = async (setTodos) => {
  await axios
    .get("https://63120d5b19eb631f9d7ec061.mockapi.io/todos")
    .then((res) => setTodos(res.data))
    .catch((err) => console.log(err.message));
};

const completeTodo = async (todo, setTodos) => {
  const updatedTodo = {
    id: todo.id,
    content: todo.content,
    isCompleted: !todo.isCompleted,
  };

  // alert(JSON.stringify(updatedTodo));
  await axios
    .put(
      `https://63120d5b19eb631f9d7ec061.mockapi.io/todos/${todo.id}`,
      updatedTodo
    )
    .catch((err) => console.log(err.message))
    .finally(() => getTodos(setTodos));
};

const deleteTodo = async (id, setTodos) => {
  await axios
    .delete(`https://63120d5b19eb631f9d7ec061.mockapi.io/todos/${id}`)
    .catch((err) => console.log(err.message))
    .finally(() => getTodos(setTodos));
};

const addTodo = async (id, content, setTodos) => {
  const newTodo = {
    id: id,
    content: content,
    isCompleted: false,
  };
  await axios
    .post("https://63120d5b19eb631f9d7ec061.mockapi.io/todos", newTodo)
    .catch((err) => console.log(err.message))
    .finally(() => getTodos(setTodos));
};

const updateTodo = async (todo, setTodos, updated) => {
  const updatedTodo = {
    id: todo.id,
    content: updated,
    isCompleted: todo.isCompleted,
  };

  await axios
    .put(
      `https://63120d5b19eb631f9d7ec061.mockapi.io/todos/${todo.id}`,
      updatedTodo
    )
    .catch((err) => console.log(err.message))
    .finally(() => getTodos(setTodos));
};

export { getTodos, completeTodo, deleteTodo, addTodo, updateTodo };
