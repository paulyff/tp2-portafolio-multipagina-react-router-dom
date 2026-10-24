const datos = {
  persona: {
    nombre: "Ana Paula Franco",
    titulo:
      "Estudiante de la Tecnicatura Universitaria en Programación de la UTN-FRT",
    resumen:
      "Me apasiona el desarrollo de software y la resolución de problemas. Mi mayor interés está en el Backend y el diseño de Bases de Datos, y disfruto del trabajo en equipo para transformar ideas en soluciones reales.",
  },

  sobreMi: {
    presentacion:
      "Soy estudiante de la Tecnicatura Universitaria en Programación en la UTN y me interesa la resolución de problemas lógicos. Tengo bases sólidas en desarrollo Full Stack, pero lo que más me gusta es construir sistemas eficientes, estructurados y escalables, tanto en el código como en la lógica de los datos.",
    formacion:
      "Tecnicatura Universitaria en Programación - UTN, Facultad Regional Tucumán.",
    intereses: [
      "Backend",
      "Diseño de Bases de Datos",
      "Resolución de problemas",
      "Trabajo en equipo",
    ],
    objetivos:
      "Mi objetivo es terminar la tecnicatura y desarrollarme como programadora, especializándome en Backend y en el diseño de bases de datos. Todavía estoy definiendo si prefiero trabajar en una empresa de software, donde pueda crecer junto a un equipo, o de forma independiente, desarrollando sistemas a medida. En cualquier caso, quiero seguir aprendiendo y construir soluciones eficientes y escalables.",
  },

  tecnologias: [
    "C#",
    "MySQL",
    "SQLite",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "Visual Studio",
  ],

  proyectos: [
    {
      id: 1,
      titulo: "Sistema de Soporte y Tickets",
      estado: "Finalizado",
      descripcion:
        "Aplicación web cliente-servidor para crear, seguir y gestionar tickets de soporte.",
      tecnologias: ["HTML", "CSS", "JavaScript", "JSON Server"],
      rol: "Desarrollo colaborativo en equipo",
      detalle:
        "Proyecto integrador de Programación III. Colaboré en el diseño de la interfaz y programé la lógica asíncrona en JavaScript para consumir una API REST simulada con JSON Server, sin recargar la página.",
      repositorio: "https://stocksystemutn.netlify.app/",
    },

    {
      id: 2,
      titulo: "Sistema de Gestión de Transporte",
      estado: "En desarrollo",
      descripcion:
        "Aplicación para digitalizar la documentación y la facturación de una flota de vehículos.",
      tecnologias: ["C#", "MySQL"],
      rol: "Diseño de la base de datos y desarrollo",
      detalle:
        "Pensado para una empresa de transporte privado: reemplaza planillas y papeles por una base de datos relacional.",
      repositorio: null,
    },

    {
      id: 3,
      titulo: "Lista de Tareas",
      estado: "Ficticio",
      descripcion:
        "Aplicación web simple para anotar, marcar y eliminar tareas pendientes.",
      tecnologias: ["React", "JavaScript", "CSS"],
      rol: "Desarrollo individual",
      detalle:
        "Proyecto ficticio de práctica. Permite agregar tareas a una lista y marcarlas como completadas, usando componentes, props y useState.",
      repositorio: null,
    },
  ],

  contactos: [
    {
      nombre: "GitHub",
      enlace: "https://github.com/paulyff",
    },

    {
      nombre: "Email",
      enlace: "mailto:pauli.franco998@gmail.com",
    },
  ],
};

export default datos;
