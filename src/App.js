import { useRoutes } from "react-router";
import { routes } from "./routes";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  const routing = useRoutes(routes);
  return (
    <>
      <GlobalStyle />
      {routing}
    </>
  );
}

export default App;
