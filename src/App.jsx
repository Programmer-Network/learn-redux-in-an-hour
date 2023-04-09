import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store/todos/todos.actions";
import { login } from "./store/users/users.actions";

function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const { todos, isAuthenticated } = useSelector(state => {
    return {
      todos: state.todosReducer.todos,
      isAuthenticated: state.userReducer.user.isAuthenticated,
      isLoading: state.userReducer.user.isLoading,
    };
  });

  const handleAddTodo = () => {
    dispatch(addTodo(text));
    setText("");
  };

  if (!isAuthenticated) {
    return (
      <div>
        <p>Unauthorized. Please log in!</p>
        <button
          onClick={() => {
            dispatch(login());
          }}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <>
      <form>
        <input
          type="text"
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
        />
        <button type="button" onClick={handleAddTodo}>
          Add TODO
        </button>
      </form>
      <div className="App">
        {todos.map(todo => (
          <div key={todo.id}>{todo.text}</div>
        ))}
      </div>
    </>
  );
}

export default App;
