import Proyecto from "./Proyecto";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import avanzarImg from "../assets/flecha-correcta.png";
import regresarImg from "../assets/flecha-izquierda.png";
import {TransitionGroup, CSSTransition} from "react-transition-group";

export default function Portafolio (){
  const idiomaActual = useSelector(state=>state.idioma);
  const arrayProyects = useSelector(state=>state.traducciones[idiomaActual].proyectos);
  const [proyectoActual, setProyectoActual] = useState(0);
  const [pause, setPause] = useState(false);
  function cambiar(i){
    setProyectoActual(i)
  }
  function avanzar(){
    setProyectoActual(proyectoActual===arrayProyects.length-1?0:proyectoActual+1)
  }
  function regresar(){
    setProyectoActual(proyectoActual===0?arrayProyects.length-1:proyectoActual-1)
  }
  function pausar(activar){
    setPause(activar)
  }
  useEffect(()=>{
    const interval = setInterval(()=>{
      if(!pause)avanzar()
    }, 5000);
    return ()=>clearInterval(interval);
  });


  return(
    <div className="portafolio_container">
      <h5>Proyectos desarrollados</h5>
      <div className="portafolio_proyectos_container">
        <img src={regresarImg} alt="regresar" onClick={()=>regresar()} className="controles"/>
          <div onMouseEnter={()=>pausar(true)} onMouseLeave={()=>pausar(false)} style={{position:"relative", height:"36vw", width:"70vw"}}>
            <TransitionGroup>
          <CSSTransition key={proyectoActual} classNames="fade" timeout={500}>
            <Proyecto 
              imagen={arrayProyects[proyectoActual].img} 
              titulo={arrayProyects[proyectoActual].title} 
              descripcion={arrayProyects[proyectoActual].description} 
              key={proyectoActual}/>
          </CSSTransition>
        </TransitionGroup>
          </div>
        <img src={avanzarImg} alt="avanzar" onClick={()=>avanzar()} className="controles"/>
      </div>
      <div className="portafolio_puntos_container">
        {arrayProyects?.map((p,i)=>(
        <p 
          key={i} 
          onClick={()=>cambiar(i)} 
          className={proyectoActual===i?"active":null}>
            •
        </p>
        ))}  
      </div>
    </div>
  )
}
