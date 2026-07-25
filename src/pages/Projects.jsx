import { Project } from "./Project";

const PROJECTS = [
  { name: "Verdana Botanical Studio", key: "verdana" },
  { name: "FloraFindr", key: "florafindr" },
  { name: "Deployed ToDo List", key: "todolist" },
];

export function Projects() {
  return (
    <>
      <h1>My projects</h1>
      <ul>
        {PROJECTS.map((item) => (
          <li>
            <Project name={item.name} />
          </li>
        ))}
      </ul>
    </>
  );
}
