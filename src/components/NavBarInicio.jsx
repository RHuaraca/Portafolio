import foto from "../assets/perfilOriginal.jpeg";
import iconoMenu from "../assets/iconomenu.png";
import { useLocation, NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function NavBarInicio(){
    let location = useLocation();
    let [menu, setMenu] = useState("ocultar");
    let idiomaActual = useSelector(state=>state.idioma)
    let modoActual = useSelector(state=>state.modoColor)
    function ocultar(){
        setMenu(menu==="mostrar"?menu="ocultar":menu="mostrar")
    }
    const opciones = useSelector(state=>state.traducciones[idiomaActual].opcionesBarraNavegacion);
    const opcionesSinInicio = opciones.slice(1);
    const opcionesIngles = useSelector(state=>state.traducciones.en.opcionesBarraNavegacion);
    const opcionesInglesSinInicio = opcionesIngles.slice(1);
    return (
        <nav className={modoActual==="oscuro"?"navbar_container":"navbar_container_lightMode"}>
            <div className="navbar_imageContainer">
                <NavLink to="/About" activeclassname="active">
                    <img src={foto}  alt="foto de perfil" className={location.pathname==="/Home"?`perfilInicio`:location.pathname==="/About"?'perfilAbout':'perfilOthers'}/>
                </NavLink>
                <img src={iconoMenu} alt="menu" className={location.pathname==="/Home"?"menuImgInicio":"menuImgOthers"} onClick={()=>ocultar()}/>   
            </div>
            <ul className={menu} >
                <li onClick={()=>ocultar()}>
                    <NavLink to="/" activeclassname="active" className="enlace">
                        {opciones[0]}
                    </NavLink>
                </li>
                {opcionesSinInicio.map((opcion,i)=>(
                    <li key={i} onClick={()=>ocultar()}>
                        <NavLink to={location.pathname!==opcionesInglesSinInicio[i]?`/${opcionesInglesSinInicio[i]}`:null} className="enlace">
                            {opcion}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
