import App from "./App";

import { render } from "@testing-library/react";

test("should render without crashing", () => {
  render(<App />);
});
