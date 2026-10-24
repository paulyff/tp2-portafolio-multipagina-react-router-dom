import { useState } from "react";
import Hero from "../components/Hero";
import datosIniciales from "../data/datos";

const Home = () => {
  const [datos] = useState(datosIniciales);

  return (
    <>
      <Hero
        nombre={datos.persona.nombre}
        titulo={datos.persona.titulo}
        resumen={datos.persona.resumen}
      />

      <div className="seccion">
        <h2>Bienvenida</h2>
        <p>
          En este sitio podés conocer más sobre mí, las tecnologías que uso, los
          proyectos en los que trabajé y cómo contactarme. Usá el menú de la
          izquierda para navegar.
        </p>
      </div>
    </>
  );
};

export default Home;
