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
  return (
    <>
      <div className="header_container">
        <NavBarInicio />
        <SwitchIngles />
        <DarkmodeSwitch />
      </div>
      <IconoGithub />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Portfolio" element={<Portafolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Navigate replace to="/Portafolio/" />} />
      </Routes>
    </>
  );
}

export default App;
