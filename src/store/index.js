import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import { todosReducer } from "./todos/todos.reducer";
import { userReducer } from "./users/users.reducer";

export const store = createStore(
  combineReducers({ todosReducer, userReducer }),
  composeWithDevTools()
);
