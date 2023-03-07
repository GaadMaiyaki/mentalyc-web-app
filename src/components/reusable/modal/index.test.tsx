import { render, screen, fireEvent } from "@testing-library/react";

import Modal from ".";

describe("Modal component", () => {
  it("renders modal when show prop is true", () => {
    render(
      <Modal show={true} setShow={() => {}}>
        <div>Modal content</div>
      </Modal>
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    expect(screen.getByLabelText("Close Modal")).toBeInTheDocument();
  });

  it("does not render modal when show prop is false", () => {
    render(
      <Modal show={false} setShow={() => {}}>
        <div>Modal content</div>
      </Modal>
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("calls setShow with false when close button is clicked", () => {
    const setShowMock = jest.fn();

    render(
      <Modal show={true} setShow={setShowMock}>
        <div>Modal content</div>
      </Modal>
    );

    fireEvent.click(screen.getByLabelText("Close Modal"));

    expect(setShowMock).toHaveBeenCalledWith(false);
  });

  it("does not close modal when modal content is clicked", () => {
    const setShowMock = jest.fn();

    render(
      <Modal show={true} setShow={setShowMock}>
        <div>Modal content</div>
      </Modal>
    );

    fireEvent.click(screen.getByText("Modal content"));

    expect(setShowMock).not.toHaveBeenCalled();
  });
});
