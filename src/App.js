import React from "react";
import "./App.css";

const Todo = () => {
  const [todoTitle, setTodoTitle] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  // useRef??

  const handleAddTodo = () => {
    if (!todoTitle) return;
    setTodos([
      ...todos,
      { id: Math.random() + Date(), title: todoTitle, isDone: false },
    ]);
    setTodoTitle("");
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    );
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ width: "500px" }}>
      <h1>My Todo List</h1>
      <div
        style={{ display: "flex", borderColor: "gray", borderStyle: "solid" }}
      >
        <div>
          <h3>Title</h3>
          <input
            type="text"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
        </div>
        <button onClick={handleAddTodo}>추가하기</button>
      </div>

      <h1>Working...!</h1>
      {todos
        .filter((todo) => !todo.isDone)
        .map((todo) => (
          <div
            key={todo.id}
            style={{ borderColor: "blue", borderStyle: "solid" }}
          >
            <h5>{todo.title}</h5>
            <button onClick={() => handleToggleTodo(todo.id)}>완료</button>
            <button onClick={() => handleRemoveTodo(todo.id)}>삭제하기</button>
          </div>
        ))}

      <h1>Done...!</h1>
      {todos
        .filter((todo) => todo.isDone)
        .map((todo) => (
          <div
            key={todo.id}
            style={{ borderColor: "red", borderStyle: "solid" }}
          >
            <h5>{todo.title}</h5>
            <button onClick={() => handleToggleTodo(todo.id)}>취소하기</button>
            <button onClick={() => handleRemoveTodo(todo.id)}>삭제하기</button>
          </div>
        ))}
    </div>
  );
};

export default Todo;
