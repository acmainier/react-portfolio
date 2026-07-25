import { Nav } from "./Nav";

export function Header({ selectedPage, onSetPage }) {
  return (
    <header className="site-header">
      <div className="site-header-content container">
        <h1>My Portfolio in React</h1>
        <Nav selectedPage={selectedPage} onSetPage={onSetPage} />
      </div>
    </header>
  );
}
