import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import InputField from ".";

describe("InputField", () => {
  const label = "Name";
  const placeholder = "Enter your name";
  const value = "Peter";
  const onChange = jest.fn();
  const inputProps = {
    name: "name",
    type: "text",
    label,
    placeholder,
    value,
    onChange,
  };

  it("should render the input field with the given props", () => {
    render(<InputField {...inputProps} />);

    const input = screen.getByLabelText(label) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.placeholder).toBe(placeholder);
    expect(input.value).toBe(value);
  });

  it("should call the onChange callback when the input value changes", () => {
    render(<InputField {...inputProps} />);

    const input = screen.getByLabelText(label) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Mayaki" } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
