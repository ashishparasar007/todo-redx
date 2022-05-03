import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";
function TodoList() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div className="todo-list">
      {todos && todos.map((todo) => <TodoCard key={todo?.id} todo={todo} />)}
    </div>
  );
}

export default TodoList;
