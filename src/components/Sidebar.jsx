import { NavLink } from "react-router-dom";

const rutas = [
  { path: "/", texto: "Inicio" },
  { path: "/about", texto: "Sobre mí" },
  { path: "/skills", texto: "Habilidades" },
  { path: "/projects", texto: "Proyectos" },
  { path: "/contact", texto: "Contacto" },
];

const Sidebar = ({ nombre }) => {
  return (
    <aside className="sidebar">
      <h2>{nombre}</h2>

      <ul>
        {rutas.map((ruta) => (
          <li key={ruta.path}>
            <NavLink
              to={ruta.path}
              end={ruta.path === "/"}
              className={({ isActive }) =>
                isActive ? "enlace activo" : "enlace"
              }
            >
              {ruta.texto}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
