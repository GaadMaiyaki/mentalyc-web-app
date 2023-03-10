import { renderHook, act } from "@testing-library/react-hooks";

import useProgress from "../useProgress";

const mockNotes: Array<any> = [
  { id: 1, title: "Note 1", progress: 10 },
  { id: 2, title: "Note 2", progress: 20 },
  { id: 3, title: "Note 3", progress: 30 },
];

describe("useProgress", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should update the progress of notes", () => {
    const setNotes = jest.fn();

    renderHook(() =>
      useProgress({ notes: mockNotes, setNotes, isSleeping: false })
    );

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(setNotes).toHaveBeenCalledTimes(1);
  });

  it("should not update the progress of notes if isSleeping is true", () => {
    const setNotes = jest.fn();

    renderHook(() =>
      useProgress({ notes: mockNotes, setNotes, isSleeping: true })
    );

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(setNotes).not.toHaveBeenCalled();
  });

  it("should not update the progress of notes if there are no notes", () => {
    const setNotes = jest.fn();

    renderHook(() => useProgress({ notes: [], setNotes, isSleeping: false }));

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(setNotes).not.toHaveBeenCalled();
  });

  it("should stop updating the progress of notes when isSleeping becomes true", () => {
    const setNotes = jest.fn();

    const { rerender } = renderHook(
      ({ notes, isSleeping }) => useProgress({ notes, setNotes, isSleeping }),
      {
        initialProps: { notes: mockNotes, isSleeping: false },
      }
    );

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    rerender({ notes: mockNotes, isSleeping: true });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(setNotes).not.toHaveBeenCalled();
  });
});
