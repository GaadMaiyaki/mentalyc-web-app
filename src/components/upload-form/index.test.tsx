import React from "react";

import { render, fireEvent } from "@testing-library/react";

import UploadForm from ".";

describe("UploadForm", () => {
  it("should render correctly", () => {
    const handleSubmit = jest.fn();

    const { getByText, getByLabelText } = render(
      <UploadForm isSleeping={false} handleSubmit={handleSubmit} />
    );

    expect(getByText("Complete Your Upload")).toBeInTheDocument();
    expect(
      getByText("Fill in the details below to complete your upload")
    ).toBeInTheDocument();
    expect(getByLabelText("Client name")).toBeInTheDocument();
    expect(getByLabelText("Note type")).toBeInTheDocument();
    expect(getByText("Finish Upload")).toBeInTheDocument();
  });

  it("should disable button when client name and note type are not selected", () => {
    const handleSubmit = jest.fn();

    const { getByRole, getByLabelText } = render(
      <UploadForm isSleeping={false} handleSubmit={handleSubmit} />
    );

    expect(getByRole("button")).toBeDisabled();

    const clientNameInput = getByLabelText("Client name");
    const noteTypeInput = getByLabelText("Note type");

    fireEvent.change(clientNameInput, { target: { value: "Peter" } });
    expect(getByRole("button")).toBeDisabled();

    fireEvent.change(noteTypeInput, {
      target: { value: "Progress note - 80 left" },
    });
    expect(getByRole("button")).toBeEnabled();
  });

  it("should call handleSubmit on submit", () => {
    const handleSubmit = jest.fn();
    const { getByRole, getByLabelText } = render(
      <UploadForm isSleeping={false} handleSubmit={handleSubmit} />
    );

    const clientNameInput = getByLabelText("Client name");
    const noteTypeInput = getByLabelText("Note type");

    const submitButton = getByRole("button", { name: "Finish Upload" });

    fireEvent.change(clientNameInput, { target: { value: "Peter" } });
    fireEvent.change(noteTypeInput, {
      target: { value: "Progress note - 80 left" },
    });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      client_name: "Peter",
      note_type: "Progress note - 80 left",
    });
  });

  it("should show 'Please wait...' when form is submitting", async () => {
    const handleSubmit = jest.fn();
    const { getByRole } = render(
      <UploadForm isSleeping={true} handleSubmit={handleSubmit} />
    );
    const submitButton = getByRole("button", { name: "Please wait..." });
    expect(submitButton).toBeInTheDocument();
  });
});
