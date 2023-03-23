import foto from "../assets/perfilOriginal.jpeg";
import iconoMenu from "../assets/iconomenu.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function NavBarInicio(){
    let location = useLocation();
    let [menu, setMenu] = useState("ocultar");
    function ocultar(){
        setMenu(menu==="mostrar"?menu="ocultar":menu="mostrar")
    }
    console.log(location.pathname)
    let opcionesEspaniol = ["Inicio", "Sobre mi", "Habilidades", "Portafolio", "Contacto"];
    let opcionesIngles = ["Home", "About", "Skills", "Portfolio", "Contact"];
    return (
        <nav className="navbar_container">
            <div className="navbar_imageContainer">
                <Link to="/About"><img src={foto}  alt="foto de perfil" className={location.pathname==="/Home"?`perfilInicio`:location.pathname==="/About"?'perfilAbout':'perfilOthers'}/></Link>
                <img src={iconoMenu} alt="menu" className="menuImg" onClick={()=>ocultar()}/>   
            </div>
            <ul className={menu}>
                {opcionesEspaniol.map((opcion,i)=><li key={i} onClick={()=>ocultar()}><Link to={location.pathname!==opcionesIngles[i]?`/${opcionesIngles[i]}`:null} className="enlace" >{opcion}</Link></li>)}
            </ul>
        </nav>
    );
}
