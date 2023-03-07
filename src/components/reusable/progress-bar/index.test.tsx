import { render, screen } from "@testing-library/react";

import ProgressBar from ".";

describe("ProgressBar component", () => {
  it("should render the progress bar with the given value", () => {
    render(<ProgressBar value={50} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar.getAttribute("aria-valuemin")).toBe("0");
    expect(progressBar.getAttribute("aria-valuemax")).toBe("100");
    expect(progressBar.getAttribute("aria-valuenow")).toBe("50");
    expect(progressBar.querySelector(".position-absolute")).toHaveStyle({
      width: "50%",
    });
  });
});
