import { Header } from "./Header";

export function Layout({ children, onSetPage }) {
  return (
    <>
      <Header onSetPage={onSetPage} />
      <main>{children}</main>
    </>
  );
}
