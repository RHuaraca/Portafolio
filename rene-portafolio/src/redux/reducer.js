// Importa los tipos de acciones necesarios
import { CAMBIAR_IDIOMA, ACTION_TYPE_2 } from "./actionTypes.js";

// Define el estado inicial del reducer
const initialState = {
  idioma: "es",
  property2: 0,
  property3: [],
};

// Define el reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAMBIAR_IDIOMA:
      // Realiza las modificaciones necesarias en el estado
      let actual = state.idioma === "es" ? "en" : "es";
      return {
        ...state,
        idioma: actual,
      };
    case ACTION_TYPE_2:
      // Realiza las modificaciones necesarias en el estado
      return {
        ...state,
        property2: action.payload,
      };
    default:
      // Devuelve el estado sin cambios para cualquier otra acción
      return state;
  }
};

export default rootReducer;
