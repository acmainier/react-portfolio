export function Home() {
  return (
    <>
      <section className="hero">
        <h1>Home</h1>
        <h2>Introduction</h2>
        <p className="lead">
          Hey! I'm Anne-Cécile. I'm French and I've been living in London with
          my family for the past 8 years.
        </p>

        <p>
          In a previous life, I've been an IT business project manager, with 10
          years of experience in the glass packaging industry and at the French
          ministry of the Armies. FR-EN Customer advisor and LEGO brick expert
          for the past 5 years, I'm currently developing my software engineering
          skills for future career challenges. To be continued...
        </p>

        <p>
          In my free time, I like reading fantasy novels, playing video games
          (with or without my son), walking and baking.
        </p>
      </section>
      <section>
        <h2>Links</h2>
        <ul className="pill-list">
          <li>
            <a
              className="pill"
              href="https://github.com/acmainier"
              target="_blank"
              rel="noreferrer"
            >
              My GitHub
            </a>
          </li>
          <li>
            <a
              className="pill"
              href="https://www.linkedin.com/in/anne-cecile-mainier/"
              target="_blank"
              rel="noreferrer"
            >
              My LinkedIn
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2>My skills</h2>
        <ul className="tag-list">
          <li className="tag">Semantic HTML</li>
          <li className="tag">CSS, Bootstrap</li>
          <li className="tag">Javascript, JQuery</li>
          <li className="tag">React</li>
          <li className="tag">Node JS</li>
          <li className="tag">GitHub</li>
        </ul>
      </section>
    </>
  );
}
