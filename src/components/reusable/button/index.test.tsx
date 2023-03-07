import React from "react";

import { render, fireEvent } from "@testing-library/react";

import Button from "./index";

describe("Button", () => {
  it("should render button with label and disabled", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <Button
        title="Click me!"
        label="Click me!"
        type="submit"
        color="gradient"
        size="md"
        disabled={true}
        onClick={onClickMock}
      />
    );
    const buttonElement = getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Click me!");
    expect(buttonElement).toBeDisabled();
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });

  it("should render button and handle onClick event", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <Button
        title="Click me!"
        label="Click me!"
        type="submit"
        color="gradient"
        size="md"
        disabled={false}
        onClick={onClickMock}
      />
    );
    const buttonElement = getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Click me!");
    expect(buttonElement).not.toBeDisabled();
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
