import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";
import ContactForm from "./ContactForm";
import { useSelector } from "react-redux";
export default function Contact (){
  const color = useSelector(state=>state.modoColor);
  const idiomaActual = useSelector(state=>state.idioma);
  const text = useSelector(state=>state.traducciones[idiomaActual].contact);
  const isMobile = window.innerWidth <= 600;
  if(isMobile){
    return(
      <div className={color==="oscuro"?"contact_container":"contact_container_ligthMode"}>
        <div className="text_icons">
          <h5>{text.title}</h5>
          <p>{text.p1}</p>
          <ContactForm 
            nombre={text.formulario.nombre} 
            correo={text.formulario.correo}
            mensaje={text.formulario.mensaje}
            gracias={text.formulario.gracias}
          />
          <p>{text.p2}</p>
          <div className="icons">
            <img src={facebookIcon} alt="FBIcon" />
            <img src={twitterIcon} alt="TwitterIcon" />
            <img src={instagramIcon} alt="InstagramIcon" />
            <img src={linkedinIcon} alt="LinkedinIcon" />
          </div>
      </div>
      
    </div>
    )
  }
  return(
    <div className={color==="oscuro"?"contact_container":"contact_container_ligthMode"} >
      <div className="text_icons">
        <h5>{text.title}</h5>
        <p>{text.p1}</p>
        <p>{text.p2}</p>
        <div className="icons">
          <a href="https://www.facebook.com/rene.huaracaccancce" target="_blank" rel="noreferrer">
            <img src={facebookIcon} alt="FBIcon" />
          </a>
          <a href="https://twitter.com/Rene_Huaraca" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="TwitterIcon" />
          </a>
          <a href="https://www.instagram.com/huaracaccancce/" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="InstagramIcon" />
          </a>
          <a href="https://www.linkedin.com/in/rene-huaraca-ccancce-38275b105/" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedinIcon" />
          </a>
        </div>
      </div>
      <ContactForm
        nombre={text.formulario.nombre} 
        correo={text.formulario.correo}
        mensaje={text.formulario.mensaje}
        enviar={text.formulario.enviar}
        gracias={text.formulario.gracias}
      />
    </div>
  )
}
