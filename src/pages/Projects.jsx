import { useEffect, useState } from "react";
import { Project } from "../components/Project";

const GITHUB_USERNAME = "acmainier";
const TOPIC = "bootcamp";

export function Projects() {
  // Get all projects with the topic bootcamp from my github accounts
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((response) => response.json())
      .then((repos) => {
        setProjects(repos.filter((repo) => repo.topics?.includes(TOPIC)));
      });
  }, []);

  // Filter the projects based on the filter input
  const [filter, setFilter] = useState("");

  return (
    <>
      <h1>My projects</h1>
      <div>
        <input
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
        {filter}
      </div>
      <ul>
        {projects
          .filter((project) =>
            project.name.toLowerCase().includes(filter.trim().toLowerCase()),
          )
          .map((repo) => (
            <li key={repo.id}>
              <Project
                name={repo.name}
                description={repo.description}
                url={repo.html_url}
              />
            </li>
          ))}
      </ul>
    </>
  );
}
