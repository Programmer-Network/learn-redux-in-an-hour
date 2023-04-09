import { LOGIN_TYPE } from "./constants";

const initalState = { user: { isAuthenticated: false, isLoading: true } };

export const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_TYPE:
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: true,
        },
      };

    default: {
      return state;
    }
  }
};
