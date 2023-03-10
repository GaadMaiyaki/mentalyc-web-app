import React from "react";

import { INotes } from "../models";

interface IuseProgress {
  notes: INotes[];
  setNotes: React.Dispatch<React.SetStateAction<INotes[]>>;
  isSleeping: boolean;
}

const delay: number = 2000;

const handleUpdate = (notes: INotes[]) => {
  return notes
    .map((note) => ({
      ...note,
      progress: note.progress + Math.floor(Math.random() * 15),
    }))
    .filter((note) => note.progress <= 100);
};

const useProgress = ({ notes, setNotes, isSleeping }: IuseProgress) => {
  const timerId = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (
      (isSleeping && timerId.current) ||
      (notes.length <= 0 && timerId.current)
    ) {
      clearInterval(timerId.current);
      return;
    }

    if (notes.length <= 0 || isSleeping) return;

    timerId.current = setInterval(() => {
      setNotes((notes: INotes[]) => handleUpdate(notes));
    }, delay);

    return () => {
      timerId.current && clearInterval(timerId.current);
    };
  }, [notes.length, isSleeping, setNotes]);
};

export default useProgress;
