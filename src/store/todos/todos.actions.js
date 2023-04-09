import {
  ADD_TODO_TYPE,
  REMOVE_TODO_TYPE,
  TOGGLE_COMPLETED_TODO,
} from "./constants";

export const addTodo = text => {
  return {
    type: ADD_TODO_TYPE,
    todo: { text, id: Math.random(), completed: false },
  };
};

const removeTodo = id => {
  return {
    type: REMOVE_TODO_TYPE,
    id,
  };
};

const toggleCompletedTodo = id => {
  return {
    type: TOGGLE_COMPLETED_TODO,
    id,
  };
};
