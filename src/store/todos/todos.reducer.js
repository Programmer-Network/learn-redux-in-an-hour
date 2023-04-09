import {
  ADD_TODO_TYPE,
  REMOVE_TODO_TYPE,
  TOGGLE_COMPLETED_TODO,
} from "./constants";

const initalState = { todos: [] };

export const todosReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO_TYPE:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };

    case REMOVE_TODO_TYPE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };

    case TOGGLE_COMPLETED_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, completed: !todo.completed };
          }
        }),
      };

    default: {
      return state;
    }
  }
};
