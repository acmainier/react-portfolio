import { useState } from "react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Layout selectedPage={page} onSetPage={setPage}>
        {page === "home" && <Home />}
        {page === "projects" && <Projects />}
      </Layout>
    </>
  );
}

export default App;
