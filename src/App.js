import { useRoutes } from "react-router";
import { routes } from "./routes";
import GlobalStyle from "./components/GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";

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
