export function NavButton({ selectedPage, id, onSetPage, name }) {
  return (
    <button
      className={selectedPage === id ? "nav-button-selected" : "nav-button"}
      onClick={() => onSetPage(id)}
    >
      {name}
    </button>
  );
}
