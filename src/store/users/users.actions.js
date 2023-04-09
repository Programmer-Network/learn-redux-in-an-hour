import { LOGIN_TYPE } from "./constants";

export const login = id => {
  return {
    type: LOGIN_TYPE,
  };
};
