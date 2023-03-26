import { Navigate, Route, Routes } from "react-router-dom";
import DarkmodeSwitch from "./components/DarkmodeSwitch";
import Home from "./components/Home";
import IconoGithub from "./components/IconoGithub";
import NavBarInicio from "./components/NavBarInicio";
import SwitchIngles from "./components/SwitchIngles";

function App() {
  return (
    <>
      <div className="header_container">
        <NavBarInicio />
        <SwitchIngles />
        <DarkmodeSwitch />
        <IconoGithub />
      </div>
      <Routes>
        <Route
          path="/Home"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/About"
          element={
            <>
              <div>Sobre mi</div>
            </>
          }
        />
        <Route
          path="/Skills"
          element={
            <>
              {/* <NavBarOthers/> */}
              <div>Habilidades</div>
            </>
          }
        />
        <Route
          path="/Portfolio"
          element={
            <>
              {/* <NavBarOthers/> */}
              <div>Portafolio</div>
            </>
          }
        />
        <Route path="/Contact" element={<div>Contacto</div>} />
        <Route path="*" element={<Navigate replace to="/Home" />} />
      </Routes>
    </>
  );
}

export default App;
