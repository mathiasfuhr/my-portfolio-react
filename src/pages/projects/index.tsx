import ProjectCard from "../../components/ProjectCard"; // Ajuste o caminho conforme sua estrutura
import { projects } from '../../data/projectData'; // Ajuste o caminho conforme sua estrutura

const Projects = () => {
  return (
    <div className="py-8 px-4 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Meus Projetos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            name={project.name}
            description={project.description}
            gitLink={project.gitLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
