import { Navigate, Route, Routes } from "react-router-dom";
import NavBarInicio from "./components/NavBarInicio";
import SwitchIngles from "./components/SwitchIngles";

function App() {
  return (
    <>
      <NavBarInicio />
      <SwitchIngles />
      <Routes>
        <Route
          path="/Home"
          element={
            <>
              <div>Inicio</div>
            </>
          }
        />
        <Route
          path="/About"
          element={
            <>
              {/* <NavBarAbout/> */}
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
