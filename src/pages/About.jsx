import "./About.css";

const skills = {
  Languages: ["JavaScript", "Python", "SQL", "Java"],
  Backend: ["FastAPI", "REST APIs", "Pydantic"],
  Frontend: ["React", "HTML", "CSS", "React Router"],
  Database: ["PostgreSQL", "SQLAlchemy", "Supabase"],
  Tools: ["Git", "GitHub", "VS Code", "Vercel"],
  Concepts: [
    "Client-Server Architecture",
    "CRUD Systems",
    "State Management",
    "REST API Integration",
    "Authentication Flows",
    "Full-Stack Application Design",
  ],
};

function About() {
  return (
    <div className="page">
      <header className="page-header animate-fade-up">
        <span className="section-label">About Me</span>
        <h1>Who I Am</h1>
      </header>

      <div className="about-layout animate-fade-up delay-2">
        <div className="about-bio">
          <p>
            I'm a full-stack developer focused on building real-world web
            applications with clear structure, reliable backend logic, and
            usable frontend experiences.
          </p>
          <p>
            My stack includes React, JavaScript, Python, FastAPI, Pydantic,
            PostgreSQL, SQLAlchemy, Supabase, and REST API integration. I enjoy
            connecting the full path from database models and API contracts to
            client-side state and UI behavior.
          </p>
          <p>
            I build projects around client-server architecture, CRUD systems,
            authentication flows, state management, and full-stack application
            design.
          </p>
        </div>

        <div className="about-skills">
          <h2 className="about-skills-heading">Skills &amp; Technologies</h2>
          <div className="skills-section">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skill-group">
                <h3>{group}</h3>
                <div className="skill-pills">
                  {items.map((s) => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
