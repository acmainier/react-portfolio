import { NavButton } from "./NavButton";

export function Nav({ selectedPage, onSetPage }) {
  return (
    <nav>
      <ul>
        <li>
          <NavButton
            selectedPage={selectedPage}
            onSetPage={onSetPage}
            id="home"
            name="Home"
          />
        </li>
        <li>
          <NavButton
            selectedPage={selectedPage}
            onSetPage={onSetPage}
            id="projects"
            name="Projects"
          />
        </li>
      </ul>
    </nav>
  );
}
