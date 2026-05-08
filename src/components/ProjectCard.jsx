import "./ProjectCard.css";

const techColors = {
  React:        "#61dafb",
  JavaScript:   "#f7df1e",
  HTML:         "#e34c26",
  CSS:          "#264de4",
  Python:       "#3776ab",
  FastAPI:      "#009688",
  Pydantic:     "#e92063",
  PostgreSQL:   "#336791",
  SQLAlchemy:   "#d71f00",
  Git:          "#f05032",
  Docker:       "#2496ed",
  "React Router": "#ca4245",
  "REST API":   "#22c55e",
  Architecture: "#a78bfa",
  Reference:    "#14b8a6",
  JWT:          "#f97316",
  Forms:        "#38bdf8",
  Validation:   "#f59e0b",
};

function TechBadge({ tech }) {
  const color = techColors[tech] || "#94a3b8";
  return (
    <span className="tech-badge" style={{ "--badge-color": color }}>
      {tech}
    </span>
  );
}

function ProjectCard({
  title,
  description,
  learningFocus,
  techStack = [],
  status,
  image,
  imageFit = "cover",
  liveLink,
  link,
}) {
  const isCompleted = status === "Completed";
  const hasLiveLink = liveLink && liveLink !== "#";
  const hasRepoLink = link && link !== "#";

  return (
    <div className="project-card">
      {image && (
        <div className="project-card__image-wrap">
          <img
            src={image}
            alt={`Preview of ${title}`}
            className={`project-card__image project-card__image--${imageFit}`}
          />
        </div>
      )}

      <div className="project-card__body">
        <div className="project-card__header">
          <h3 className="project-card__title">{title}</h3>
          <span className={`status-badge ${isCompleted ? "status-badge--done" : "status-badge--wip"}`}>
            {status}
          </span>
        </div>

        <p className="project-card__desc">{description}</p>

        {learningFocus && (
          <p className="project-card__focus">{learningFocus}</p>
        )}

        <div className="project-card__tech">
          {techStack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {hasLiveLink || hasRepoLink ? (
          <div className="project-card__links">
            {hasLiveLink && (
              <a
                href={liveLink}
                className="project-card__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                </svg>
                Live Site
              </a>
            )}

            {hasRepoLink && (
              <a
                href={link}
                className="project-card__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
                </svg>
                GitHub
              </a>
            )}
          </div>
        ) : (
          <span className="project-card__link project-card__link--disabled">
            Private / Coming Soon
          </span>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
