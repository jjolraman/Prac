import { useState } from "react";
import "./App.css";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([
    { id: 1, title: "제목", isDone: false },
    { id: 2, title: "제목2", isDone: false },
  ]);

  const onAddTodo = () => {
    if (title === "") return;
    let newData = {
      id: todo.length + 1,

      title: title,
      isDone: false,
    };
    let copy = [...todo, newData];
    setTodo(copy);
  };

  return (
    <div style={{ width: "500px" }}>
      <h1>my todo list</h1>
      <div
        className="titlebox"
        style={{ display: "flex", borderColor: "gray", borderStyle: "solid" }}
      >
        <div>
          <h3>제목</h3>
          <input type text />
        </div>
        <div>
          <h3>내용</h3>
          <input type text />
        </div>
        <button onclick>추가하기</button>
      </div>

      <h1>Working...!</h1>
      <div style={{ borderColor: "blue", borderStyle: "solid" }}>
        <h5>리액트 공부!</h5>
        <h7>리액트 기초공부!</h7>
        <button onclick>완료하기</button>
        <button onclick>삭제하기</button>
      </div>

      <h1>Done...!</h1>
      <div style={{ borderColor: "red", borderStyle: "solid" }}>
        <div>
          <h5>리액트 공부!!@</h5>
          <h7>리액트 기초공부!!@</h7>
          <button onclick>완료하기</button>
          <button onclick>삭제하기</button>
        </div>
      </div>
    </div>
  );
};
export default Todo;
