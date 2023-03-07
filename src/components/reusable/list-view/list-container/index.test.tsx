import { render, fireEvent } from "@testing-library/react";

import ListContainer from ".";

import { INotes } from "../../../../models";

const note: INotes = {
  client_name: "Peter Mayaki",
  note_type: "A Mayaki note.",
  progress: 50,
  id: 1,
};

describe("ListContainer", () => {
  it("should render client name and note type", () => {
    const { getByText } = render(
      <ListContainer note={note} setNotes={() => {}} />
    );

    expect(getByText(note.client_name)).toBeInTheDocument();
    expect(getByText(note.note_type)).toBeInTheDocument();
  });

  it("should delete note on clicking delete button", () => {
    const setNotesMock = jest.fn();
    const { getByLabelText, getByText, queryByText } = render(
      <ListContainer note={note} setNotes={setNotesMock} />
    );

    expect(
      queryByText("Are you sure you want to delete note?")
    ).not.toBeInTheDocument();

    fireEvent.click(getByLabelText("delete note"));

    expect(
      getByText("Are you sure you want to delete note?")
    ).toBeInTheDocument();

    fireEvent.click(getByText("YES"));

    expect(setNotesMock).toHaveBeenCalledTimes(1);
    expect(
      queryByText("Are you sure you want to delete note?")
    ).not.toBeInTheDocument();
  });
});
