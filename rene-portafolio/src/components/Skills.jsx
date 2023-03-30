import Skill from "./Skill";
import {useSelector} from "react-redux";

export default function Skills(){
  const idiomaActual = useSelector(state=>state.idioma)
  const lenguajes = useSelector(state=>state.traducciones[idiomaActual].lenguajes)
  const librerias = useSelector(state=>state.traducciones[idiomaActual].librerias)
  const dataBases = useSelector(state=>state.traducciones[idiomaActual].dataBases)
  const otros = useSelector(state => state.traducciones[idiomaActual].otros)
  return(
    <div className="skills_container">
      <h5>Lenguajes:</h5>
      <div className="skills_section">
        {lenguajes?.map((lenguaje,i)=>(
        <Skill 
        title={lenguaje.title} 
        key={i} 
        logo={lenguaje.logo}
        nivel={lenguaje.nivel}/>))}
      </div>
      <h5>Librerías:</h5>
      <div className="skills_section">
        {librerias?.map((libreria,i)=>(
          <Skill
          title={libreria.title}
          logo={libreria.logo}
          nivel={libreria.nivel}
          key={i}
          />
        ))}
      </div>
      <h5>Bases de datos:</h5>
      <div className="skills_section">
        {dataBases?.map((dataBase,i)=>(
          <Skill
          title={dataBase.title}
          logo={dataBase.logo}
          nivel={dataBase.nivel}
          key={i}
          />
        ))}
      </div>
      <h5>Entornos, Preprocesadores, Herramientas y otros:</h5>
      <div className="skills_section">
        {otros?.map((otro,i)=>(
          <Skill
          title={otro.title}
          logo={otro.logo}
          nivel={otro.nivel}
          key={i}
          />
        ))}
      </div>
      <footer>
        <p>algunos íconos fueron tomados de la siguiente página <a href="https://www.flaticon.com/free-icons/linkedin">Flaticon</a></p>
      </footer>
    </div>
  )
}
