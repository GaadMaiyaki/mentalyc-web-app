import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { render } from "@testing-library/react";

test("should render without crashing", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
