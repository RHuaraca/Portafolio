import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import DarkmodeSwitch from "./components/DarkmodeSwitch";
import Home from "./components/Home";
import IconoGithub from "./components/IconoGithub";
import NavBarInicio from "./components/NavBarInicio";
import Portafolio from "./components/Portafolio";
import Skills from "./components/Skills";
import SwitchIngles from "./components/SwitchIngles";
import Contact from "./components/Contact";
/* import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setearColor } from "./redux/actions.js"; */

function App() {
  /* const dispatch = useDispatch();
  useEffect(() => {
    const preferenciaDeColor =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (preferenciaDeColor) {
      dispatch(setearColor("oscuro"));
    } else {
      dispatch(setearColor("claro"));
    }
    console.log(preferenciaDeColor);
  }, []); */
  return (
    <>
      <div className="header_container">
        <NavBarInicio />
        <SwitchIngles />
        <DarkmodeSwitch />
      </div>
      <IconoGithub />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Portfolio" element={<Portafolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Navigate replace to="/Home" />} />
      </Routes>
    </>
  );
}

export default App;
