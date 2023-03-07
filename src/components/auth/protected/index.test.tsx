import React from "react";

import { render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import Protected from ".";

const MockProtected = ({
  children,
  isAuthenticated,
}: {
  children: JSX.Element;
  isAuthenticated: boolean;
}) => {
  return (
    <BrowserRouter>
      <Protected isAuthenticated={isAuthenticated}>{children}</Protected>
    </BrowserRouter>
  );
};

describe("Protected", () => {
  it("renders children if isAuthenticated is true", () => {
    const { getByTestId } = render(
      <MockProtected isAuthenticated={true}>
        <div data-testid="child">Child Component</div>
      </MockProtected>
    );

    expect(getByTestId("child")).toBeInTheDocument();
  });
});
