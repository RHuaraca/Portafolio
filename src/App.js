/* import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom"; */
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import DarkmodeSwitch from "./components/DarkmodeSwitch";
import Home from "./components/Home";
import IconoGithub from "./components/IconoGithub";
import NavBarInicio from "./components/NavBarInicio";
import Portafolio from "./components/Portafolio";
import Skills from "./components/Skills";
import SwitchIngles from "./components/SwitchIngles";
import Contact from "./components/Contact";
/* import { useSelector } from "react-redux"; */

function App() {
  /* const location = useLocation();
  const routes = useSelector((state) => state.en.opcionesBarraNavegacion); */

  /* useEffect(() => {
    const is404 = !routes.find((route) => route.path === location.pathname);
    if (is404 && !location.pathname.startsWith("/404")) {
      console.log(location.pathname);
    }
  }, [location]); */

  return (
    <>
      <div className="header_container">
        <NavBarInicio />
        <SwitchIngles />
        <DarkmodeSwitch />
      </div>
      <IconoGithub />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/About`} element={<About />} />
        <Route path={`/Skills`} element={<Skills />} />
        <Route path={`/Portfolio`} element={<Portafolio />} />
        <Route path={`/Contact`} element={<Contact />} />
        {/* <Route path="/404" element={<Navigate to="/" />} /> */}
        {/* <Route path="*" element={<Navigate to="/404" />} /> */}
      </Routes>
    </>
  );
}

export default App;
