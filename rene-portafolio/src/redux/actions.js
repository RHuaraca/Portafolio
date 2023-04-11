// Importa los tipos de acciones necesarios
import {
  CAMBIAR_IDIOMA,
  CAMBIAR_MODO_COLOR,
  PAUSAR_ANIMACION,
  SETEAR_COLOR,
} from "./actionTypes.js";

export const cambiarIdioma = () => ({
  type: CAMBIAR_IDIOMA,
});

export const cambiarModoColor = () => ({
  type: CAMBIAR_MODO_COLOR,
});

export const pausarAnimacion = () => ({
  type: PAUSAR_ANIMACION,
});

export const setearColor = (color) => ({
  type: SETEAR_COLOR,
  payload: color,
});
