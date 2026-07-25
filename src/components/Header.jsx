import { Nav } from "./Nav";

export function Header({ onSetPage }) {
  return (
    <header>
      <h1>My React Portfolio</h1>
      <Nav onSetPage={onSetPage} />
    </header>
  );
}
