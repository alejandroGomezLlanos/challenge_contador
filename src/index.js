import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import FirstApp from "./FirstApp";

//arriba imports
//recordar meter dependencia en codesandbox

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//invocacion de componentes

root.render(
  <StrictMode>
    <App titulo="cadena" />
    <FirstApp value={7} />
  </StrictMode>
);
