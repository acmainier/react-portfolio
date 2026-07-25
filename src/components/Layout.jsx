import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children, selectedPage, onSetPage }) {
  return (
    <>
      <Header selectedPage={selectedPage} onSetPage={onSetPage} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
