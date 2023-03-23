// Importa los tipos de acciones necesarios
import { CAMBIAR_IDIOMA, CAMBIAR_MODO_COLOR } from "./actionTypes.js";

export const cambiarIdioma = () => ({
  type: CAMBIAR_IDIOMA,
});

export const cambiarModoColor = () => ({
  type: CAMBIAR_MODO_COLOR,
});
