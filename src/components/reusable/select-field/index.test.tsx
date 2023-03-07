import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import SelectField from ".";

const options = ["Option 1", "Option 2", "Option 3"];
const onChange = jest.fn();

it("renders SelectField component with options and label", () => {
  render(
    <SelectField
      options={options}
      name="select"
      value=""
      onChange={onChange}
      label="Select an option"
    />
  );

  expect(screen.getByLabelText("Select an option")).toBeInTheDocument();

  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();

  expect(screen.getByRole("img")).toBeInTheDocument();

  fireEvent.click(inputElement);

  expect(screen.getByRole("listbox")).toBeInTheDocument();

  options.forEach((option) => {
    const optionElement = screen.getByText(option);
    expect(optionElement).toBeInTheDocument();
  });
});

it("renders SelectField component with selected option", () => {
  render(
    <SelectField
      options={options}
      name="select"
      value="Option 2"
      onChange={onChange}
      label="Select an option"
    />
  );

  const selectedOption = screen.getByDisplayValue("Option 2");
  expect(selectedOption).toBeInTheDocument();

  const arrowElement = screen.getByRole("img");
  expect(arrowElement).toBeInTheDocument();

  fireEvent.click(arrowElement);

  const optionsList = screen.getByRole("listbox");
  expect(optionsList).toBeInTheDocument();

  options.forEach((option) => {
    const optionElement = screen.getByText(option);
    expect(optionElement).toBeInTheDocument();
  });

  fireEvent.click(screen.getByText("Option 3"));

  expect(onChange).toHaveBeenCalledWith({ select: "Option 3" });
});
