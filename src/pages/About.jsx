import "./About.css";

const skills = {
  Frontend:  ["HTML", "CSS", "JavaScript", "React"],
  Backend:   ["Python", "FastAPI"],
  Database:  ["PostgreSQL"],
  Tools:     ["Git", "Docker"],
};

function About() {
  return (
    <div className="page">
      <header className="page-header animate-fade-up">
        <span className="section-label">About Me</span>
        <h1>Who I Am</h1>
      </header>

      <div className="about-layout animate-fade-up delay-2">
        {/* Bio */}
        <div className="about-bio">
          <p>
            I'm a Computer Science student with a focus on building real-world
            web applications. I care deeply about clean structure, clear logic,
            and understanding how things work from the ground up — not just
            making them work.
          </p>
          <p>
            My current focus is on advancing my frontend skills with React and
            expanding into backend development using Python and FastAPI. I enjoy
            working on problems that require both technical thinking and good
            design instincts.
          </p>
          <p>
            Outside of coursework, I build personal projects to apply what I
            learn — from landing pages and productivity tools to full-stack
            multi-player web applications.
          </p>
        </div>

        {/* Skills */}
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
