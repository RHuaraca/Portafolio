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

function App() {
  const urlBase = "https://rhuaraca.github.io/Portfolio";
  return (
    <>
      <div className="header_container">
        <NavBarInicio />
        <SwitchIngles />
        <DarkmodeSwitch />
      </div>
      <IconoGithub />
      <Routes>
        <Route path={`${urlBase}/`} element={<Home />} />
        <Route path={`${urlBase}/About`} element={<About />} />
        <Route path={`${urlBase}/Skills`} element={<Skills />} />
        <Route path={`${urlBase}/Portfolio`} element={<Portafolio />} />
        <Route path={`${urlBase}/Contact`} element={<Contact />} />
        <Route path="*" element={<Navigate replace to={`${urlBase}/`} />} />
      </Routes>
    </>
  );
}

export default App;
