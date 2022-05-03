import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
function TodoAdd() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let value = e.target.todoTitle.value;
    if (value.trim() !== "") {
      let data = {
        id: +new Date(),
        title: value,
        done: false,
      };
      dispatch(addTodo(data));
      e.target.todoTitle.value = "";
    }
  };
  return (
    <div className="todo-add">
      <form onSubmit={handleSubmit}>
        <div className="todo-form-group">
          <input name="todoTitle" className="todo-add_input" />
        </div>
      </form>
    </div>
  );
}

export default TodoAdd;
