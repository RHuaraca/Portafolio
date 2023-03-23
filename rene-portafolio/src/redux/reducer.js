// Importa los tipos de acciones necesarios
import { CAMBIAR_IDIOMA, CAMBIAR_MODO_COLOR } from "./actionTypes.js";

// Define el estado inicial del reducer
const initialState = {
  modoColor: "oscuro",
  idioma: "es",
  traducciones: {
    es: {
      opcionesBarraNavegacion: [
        "Inicio",
        "Sobre mi",
        "Habilidades",
        "Portafolio",
        "Contacto",
      ],
      profesion: "desarrollador full stack",
      otro: "vdf",
    },
    en: {
      opcionesBarraNavegacion: [
        "Home",
        "About",
        "Skills",
        "Portfolio",
        "Contact",
      ],
      profesion: "full stack developer",
    },
  },
};

// Define el reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAMBIAR_IDIOMA:
      // Realiza las modificaciones necesarias en el estado
      let idiomaActual = state.idioma === "es" ? "en" : "es";
      return {
        ...state,
        idioma: idiomaActual,
      };
    case CAMBIAR_MODO_COLOR:
      // Realiza las modificaciones necesarias en el estado
      let colorActual = state.modoColor === "claro" ? "oscuro" : "claro";
      return {
        ...state,
        modoColor: colorActual,
      };
    default:
      // Devuelve el estado sin cambios para cualquier otra acción
      return state;
  }
};

export default rootReducer;
