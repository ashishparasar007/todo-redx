import { type } from "./actionType";

export const addTodo = (todo) => {
  return {
    type: type.add,
    payload: todo,
  };
};
export const completeTodo = (id) => {
  return {
    type: type.add,
    payload: id,
  };
};
