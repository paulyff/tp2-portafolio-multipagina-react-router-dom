import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Proyects from "./pages/Proyects";
import Contact from "./pages/Contact";
import datos from "./data/datos";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About texto={datos.sobreMi} />} />
        <Route
          path="/skills"
          element={<Skills tecnologias={datos.tecnologias} />}
        />
        <Route
          path="/projects"
          element={<Proyects proyectos={datos.proyectos} />}
        />
        <Route
          path="/contact"
          element={<Contact contactos={datos.contactos} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
