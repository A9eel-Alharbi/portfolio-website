import { Link } from "react-router-dom";

function Home() {
  return (
     <main className="page">
      <h1>Hi, I’m [Aseel Abdullah Al-Harbi]</h1>
      <p>
        I build clean, structured web applications using modern frontend tools.
      </p>

      <h2>Explore</h2>
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </main>
  );
}

export default Home;
