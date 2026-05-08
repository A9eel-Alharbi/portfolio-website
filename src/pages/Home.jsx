import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="hero">
      {/* Decorative background glow */}
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-eyebrow animate-fade-up delay-1">
          Computer Science Student
        </p>

        <h1 className="hero-headline animate-fade-up delay-2">
          Hi, I'm <span className="hero-name">Aseel</span>
        </h1>

        <p className="hero-subtitle animate-fade-up delay-3">
          Frontend developer building clean, structured web applications
          with{" "}
          <span className="hero-tech">React</span>,{" "}
          <span className="hero-tech">JavaScript</span>, and modern tools.
        </p>

        <div className="hero-actions animate-fade-up delay-4">
          <Link to="/projects" className="btn btn-primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link to="/about" className="btn btn-ghost">
            About Me
          </Link>
        </div>

        {/* Quick tech row */}
        <div className="hero-stack animate-fade-up delay-5">
          {["HTML", "CSS", "JavaScript", "React", "Python"].map((t) => (
            <span key={t} className="hero-stack-item">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
