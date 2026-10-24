import SkillCard from "../components/SkillCard";

const Skills = ({ tecnologias }) => {
  return (
    <div className="seccion" id="Tecnologías">
      <h2>Tecnologías y herramientas</h2>

      {tecnologias.map((tec) => (
        <SkillCard key={tec} nombre={tec} />
      ))}
    </div>
  );
};

export default Skills;
