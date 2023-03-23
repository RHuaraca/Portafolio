import foto from "../assets/perfilOriginal.jpeg";
import iconoMenu from "../assets/iconomenu.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function NavBarInicio(){
    let location = useLocation();
    let [menu, setMenu] = useState("ocultar");
    let idiomaActual = useSelector(state=>state.idioma)
    function ocultar(){
        setMenu(menu==="mostrar"?menu="ocultar":menu="mostrar")
    }
    let opciones = useSelector(state=>state.traducciones[idiomaActual].opcionesBarraNavegacion);
    let opcionesIngles = useSelector(state=>state.traducciones.en.opcionesBarraNavegacion);
    return (
        <nav className="navbar_container">
            <div className="navbar_imageContainer">
                <Link to="/About"><img src={foto}  alt="foto de perfil" className={location.pathname==="/Home"?`perfilInicio`:location.pathname==="/About"?'perfilAbout':'perfilOthers'}/></Link>
                <img src={iconoMenu} alt="menu" className={location.pathname==="/Home"?"menuImgInicio":"menuImgOthers"} onClick={()=>ocultar()}/>   
            </div>
            <ul className={menu}>
                {opciones.map((opcion,i)=>(
                    <li key={i} onClick={()=>ocultar()}>
                        <Link to={location.pathname!==opcionesIngles[i]?`/${opcionesIngles[i]}`:null} className="enlace">
                            {opcion}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
