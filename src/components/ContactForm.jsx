import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useSelector } from 'react-redux';

export default function ContactForm({nombre, correo, mensaje, enviar, gracias}) {
  const color = useSelector(state=>state.modoColor);
  const [state, handleSubmit] = useForm("xoqzpwzy");
  if (state.succeeded) {
      return <p className='mensaje_enviado'>{gracias}</p>;
  }
  return (
    <form onSubmit={handleSubmit} className={color==="oscuro"?'form_container':'form_container_ligthMode'}>
      <input id="nombre" type="nombre" name="nombre" placeholder={nombre}/>
      <ValidationError prefix="Nombre" field="nombre" errors={state.errors}/>
      <input id="email" type="email" name="email" placeholder={correo}/>
      <ValidationError prefix="Email" field="email"errors={state.errors}/>
      <textarea id="message" name="message" placeholder={mensaje}/>
      <ValidationError prefix="Message" field="message"errors={state.errors}/>
      <button type="submit" disabled={state.submitting}>{enviar}</button>
    </form>
  );
}
