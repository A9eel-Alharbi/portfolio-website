import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <div className="page">
      <header className="page-header animate-fade-up">
        <span className="section-label">My Work</span>
        <h1>Learning Path</h1>
        <p>
          These projects are ordered by what each one taught me: from HTML and
          CSS foundations, to JavaScript behavior, React architecture, forms,
          full-stack CRUD, and finally a reference system for the concepts I
          want to keep practicing.
        </p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            learningFocus={project.learningFocus}
            techStack={project.techStack}
            status={project.status}
            image={project.image}
            imageFit={project.imageFit}
            liveLink={project.liveLink}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
