export function Home() {
  return (
    <>
      <h1>Home</h1>
      <section className="hero">
        <h2>Introduction</h2>
        <p className="lead">
          Hey! I'm Anne-Cécile. I'm French and I've been living in London with
          my family for the past 8 years.
        </p>

        <p>
          Developer in training. Project manager by background. Problem-solver
          by nature. I'm currently completing a Full Stack Web Development Level
          4 Skills Bootcamp at Step8Up Academy — HTML, CSS, JavaScript,
          responsive design, Git/GitHub, and more. After 10 years managing IT
          projects across international teams and 5 years in customer-facing
          roles, I'm making a deliberate move back into the tech and development
          space. What I bring beyond the code:
          <ul>
            <li>
              A decade of IT project management, including multilingual ERP
              rollouts across European and South American subsidiaries
            </li>
            <li>
              Bilingual (French/English) with a proven track record in content
              and communication, including AI chatbot tone-of-voice at The LEGO
              Group
            </li>
            <li>
              Cross-functional collaboration across business, tech, and
              operations teams Looking for graduate or junior developer roles
              where a strong technical foundation meets real-world experience.
            </li>
          </ul>
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
