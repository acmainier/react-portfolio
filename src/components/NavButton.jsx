export function NavButton({ selectedPage, id, onSetPage, name }) {
  return (
    <button
      className={selectedPage === id ? "nav-button-selected" : "nav-button"}
      aria-current={selectedPage === id ? "page" : undefined}
      onClick={() => onSetPage(id)}
    >
      {name}
    </button>
  );
}
