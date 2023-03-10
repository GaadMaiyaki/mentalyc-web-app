import React from "react";

import TrashSvg from "../../../../assets/svgs/trash";
import { INotes } from "../../../../models";

import ProgressBar from "../../progress-bar";
import Typography from "../../typography";

import { parseClassName } from "./../../../../utils";

import styles from "./index.module.scss";

const ListModal = ({
  note,
  setNotes,
  setShow,
}: {
  note: INotes;
  setNotes: React.Dispatch<React.SetStateAction<INotes[]>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { client_name: clientName, note_type: noteType, progress, id } = note;

  const handleDelete = () => {
    setNotes((notes) => {
      return notes.filter((note) => note.id !== id);
    });
    setShow(false);
  };

  return (
    <>
      <div
        className={parseClassName([
          "ps-2 ps-md-3 ps-lg-4 ps-xl-4 ps-xxl-4",
          "pe-2 pe-md-3 pe-lg-4 pe-xl-4 pe-xxl-4",
          "mt-1",
          styles.wrapper,
        ])}
      >
        <Typography
          variant="div"
          size="lg"
          bold
          classes={parseClassName(["text-center mb-3 w-100"])}
        >
          Note Details
        </Typography>
        <aside className="mb-4">
          <Typography
            variant="div"
            size="md"
            bold
            classes={parseClassName(["text-left w-100"])}
          >
            Client Name
          </Typography>
          <Typography
            variant="div"
            size="md"
            classes={parseClassName(["text-left w-100"])}
          >
            {clientName}
          </Typography>
        </aside>

        <aside>
          <Typography
            variant="div"
            size="md"
            bold
            classes={parseClassName(["text-left w-100"])}
          >
            Note Type
          </Typography>

          <Typography
            variant="div"
            size="md"
            classes={parseClassName(["text-left w-100"])}
          >
            {noteType}
          </Typography>
        </aside>

        <aside className="mt-4">
          <Typography
            variant="div"
            size="md"
            bold
            classes={parseClassName(["text-left w-100"])}
          >
            ETA
          </Typography>

          <div className="d-flex align-items-center justify-content-between w-100 pb-3">
            <div className={parseClassName([styles.flexProgress, "pt-1"])}>
              <ProgressBar value={progress} />
            </div>

            <div className={parseClassName([styles.flexDelete, "text-end"])}>
              <button
                title="delete"
                aria-label="delete note"
                onClick={handleDelete}
              >
                <TrashSvg />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default ListModal;
