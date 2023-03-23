import { useState } from "react"
import banderaEspana from "../assets/espana.png"
import banderaEeuu from "../assets/estados-unidos.png"
import {useSelector, useDispatch} from "react-redux";
import {
  cambiarIdioma,
} from "../redux/actions.js";

export default function SwitchIngles(){
  let idiomaActual = useSelector(state=>state.idioma);
  let [opaco, setOpaco] = useState(idiomaActual);
  console.log(idiomaActual)
  console.log(opaco);
  let dispatch = useDispatch();
  const selecionIdioma = ()=>{
    dispatch(cambiarIdioma());
    setOpaco(opaco==='en'?'es':'en')
  }
  return(
    <div className="switchIngles_container">
      <div className="switchIngles_español" onClick={()=>selecionIdioma()}>
        <img src={banderaEspana} alt="bandera de españa" className={opaco==="en"?"opacar":null}/>
      </div>
      <div className="switchIngles_ingles" onClick={()=>selecionIdioma()}>
        <img src={banderaEeuu} alt="bandera de EEUU" className={opaco==="es"?"opacar":null} />
      </div>
    </div>
  )
}
