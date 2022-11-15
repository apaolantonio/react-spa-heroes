import { types } from "../types/types";

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return {
        // es util hacer la desestructuracion del state para mantener el state anterior y
        // reemplazamos lo que realmente nos interesa
        ...state,
        logged: true,
        user: action.payload,
      };
    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
