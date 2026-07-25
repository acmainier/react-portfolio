import { useEffect, useState } from "react";
import { Project } from "../components/Project";

const GITHUB_USERNAME = "acmainier";
const TOPIC = "bootcamp";

export function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((response) => response.json())
      .then((repos) => {
        setProjects(repos.filter((repo) => repo.topics?.includes(TOPIC)));
      });
  }, []);

  return (
    <>
      <h1>My projects</h1>
      <ul>
        {projects.map((repo) => (
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
