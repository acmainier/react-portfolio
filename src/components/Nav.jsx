export function Nav({ onSetPage }) {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => onSetPage("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => onSetPage("projects")}>Projects</button>
        </li>
      </ul>
    </nav>
  );
}
