import "./App.scss";

import useCustomRoutes from "./routes";

function App() {
  const routes = useCustomRoutes();

  return <section className="app">{routes}</section>;
}

export default App;
