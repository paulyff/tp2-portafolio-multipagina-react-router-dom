const About = ({ sobreMi }) => {
  return (
    <div className="seccion">
      <h2>Sobre mí</h2>
      <p>{sobreMi.presentacion}</p>

      <h3>Formación</h3>
      <p>{sobreMi.formacion}</p>

      <h3>Intereses</h3>
      {sobreMi.intereses.map((interes) => (
        <span className="badge" key={interes}>
          {interes}
        </span>
      ))}

      <h3>Objetivos profesionales</h3>
      <p>{sobreMi.objetivos}</p>
    </div>
  );
};

export default About;
