import TodoAdd from "./componets/TodoAdd";
import TodoList from "./componets/TodoList";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TodoHeader from "./componets/TodoHeader";
function TodoApp() {
  return (
    <Provider store={store}>
      <div className="todo-app ui four container">
        <TodoHeader />
        <div className="todo-app_todoadd ui centered">
          <TodoAdd />
        </div>
        <div className="todo-app_todolist">
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}

export default TodoApp;
