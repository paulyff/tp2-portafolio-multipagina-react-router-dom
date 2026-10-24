import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Proyects from "./pages/Proyects";
import Contact from "./pages/Contact";
import datos from "./data/datos";

const App = () => {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar nombre="Mi Portafolio" />

        <main className="contenido">
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

          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
