import { render } from "@testing-library/react";

import Typography from ".";

describe("Typography Component", () => {
  it("renders the correct text", () => {
    const text = "Hello, world!";
    const { getByText } = render(<Typography size="sm">{text}</Typography>);
    expect(getByText(text)).toBeInTheDocument();
  });

  it("applies the correct CSS classes based on props", () => {
    const { container } = render(
      <Typography
        variant="h1"
        color="primary"
        size="lg"
        bold
        classes="custom-class"
      >
        Hello, world!
      </Typography>
    );

    const typographyElement: any = container.firstChild;

    expect(typographyElement).toHaveClass(
      "primary",
      "lg",
      "bold",
      "custom-class"
    );
    expect(typographyElement.tagName).toMatch(/h1/i);
    expect(typographyElement.textContent).toBe("Hello, world!");
  });

  it("renders the correct tag based on variant prop", () => {
    const { container } = render(
      <Typography size="sm" variant="h2">
        Hello, world!
      </Typography>
    );

    const typographyElement: any = container.firstChild;

    expect(typographyElement.tagName).toMatch(/h2/i);
  });
});
