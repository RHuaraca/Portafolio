import { useSelector } from "react-redux";

export default function Home(){
  let idiomaActual = useSelector(state=>state.idioma);
  let showProfesion = useSelector(state=>state.traducciones[idiomaActual].profesion);
    return (
        <section className="home_container">
          <h1>RENE HUARACA</h1>
          <h2>{showProfesion}</h2>
        </section>
    );
}
