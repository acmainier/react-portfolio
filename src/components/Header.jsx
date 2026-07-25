import { Nav } from "./Nav";

export function Header({ onSetPage }) {
  return (
    <header>
      <h1>My Portfolio</h1>
      <Nav onSetPage={onSetPage} />
    </header>
  );
}
