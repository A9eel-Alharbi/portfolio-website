import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <div className="page">
      <header className="page-header animate-fade-up">
        <span className="section-label">My Work</span>
        <h1>Projects</h1>
        <p>A collection of things I've built while learning and exploring web development.</p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            status={project.status}
            image={project.image}
            imageFit={project.imageFit}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
