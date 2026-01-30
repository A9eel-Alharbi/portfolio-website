import ProjectCard from "../components/ProjectCard";
function Projects({ projects }) {
  return (
    <main className="page">
      <h1>Projects</h1>
       <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          status={project.status}
          image={project.image}
          link={project.link}
        />
        
      ))}
      </div>
    </main>
  );
}

export default Projects;
