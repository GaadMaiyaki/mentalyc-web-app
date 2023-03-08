import React from "react";

import { render, screen } from "@testing-library/react";

import ListView from ".";

const notes = [
  {
    id: 1,
    client_name: "Peter",
    note_type: "Progress note",
    progress: 50,
  },
  {
    id: 2,
    client_name: "Mayaki",
    note_type: "EMDR note",
    progress: 30,
  },
];

describe("ListView component", () => {
  it("should display header correctly with plural notes in progress", () => {
    render(<ListView data={notes} setNotes={() => {}} />);
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("Notes in progress")).toBeInTheDocument();
  });

  it("should display header correctly with singular note in progress", () => {
    render(<ListView data={[notes[0]]} setNotes={() => {}} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Note in progress")).toBeInTheDocument();
  });

  it("should display notes list correctly", () => {
    render(<ListView data={notes} setNotes={() => {}} />);
    expect(screen.getByText("Client")).toBeInTheDocument();
    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("ETA")).toBeInTheDocument();
    expect(screen.getByText("Peter")).toBeInTheDocument();
    expect(screen.getByText("Progress note")).toBeInTheDocument();
    expect(screen.getByText("Mayaki")).toBeInTheDocument();
    expect(screen.getByText("EMDR note")).toBeInTheDocument();
  });

  it("renders null when note prop is empty", () => {
    const { container } = render(<ListView data={[]} setNotes={() => {}} />);
    expect(container.firstChild).toBeNull();
  });
});
