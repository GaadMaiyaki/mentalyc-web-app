import React from "react";

import TrashSvg from "../../../../assets/svgs/trash";
import { INotes } from "../../../../models";

import Modal from "../../modal";
import ProgressBar from "../../progress-bar";
import Typography from "../../typography";

import { parseClassName } from "./../../../../utils";

import styles from "./index.module.scss";

const ListContainer = ({
  note,
  setNotes,
}: {
  note: INotes;
  setNotes: React.Dispatch<React.SetStateAction<INotes[]>>;
}) => {
  const { client_name: clientName, note_type: noteType, progress, id } = note;

  const handleDelete = () => {
    setNotes((notes) => {
      return notes.filter((note) => note.id !== id);
    });
    setShow(false);
  };

  const [show, setShow] = React.useState(false);

  return (
    <>
      <Modal
        show={show}
        setShow={setShow}
        columnLayout="col-12 col-md-7 col-lg-5 col-xl-5 col-xxl-5"
      >
        <div className="text-center">
          <Typography variant="div" size="sm">
            Are you sure you want to delete note?
          </Typography>
          <div
            className={parseClassName([
              "d-flex align-items-center justify-content-center my-5",
              styles.modalWrapper,
            ])}
          >
            <button
              className="me-3 px-4 py-1"
              aria-label="yes"
              onClick={handleDelete}
            >
              YES
            </button>
            <button
              className="ms-3 px-4 py-1"
              arial-label="no"
              onClick={() => setShow(false)}
            >
              NO
            </button>
          </div>
        </div>
      </Modal>

      <div
        className={parseClassName([
          "d-flex align-items-center justify-content-between",
          "ps-2 ps-md-3 ps-lg-4 ps-xl-4 ps-xxl-4",
          "pe-2 pe-md-3 pe-lg-4 pe-xl-4 pe-xxl-4",
          "mt-1",
          styles.wrapper,
        ])}
      >
        <Typography
          variant="div"
          size="xs"
          classes={parseClassName(["text-left w-100"])}
        >
          {clientName}
        </Typography>

        <Typography
          variant="div"
          size="xs"
          classes={parseClassName([
            "text-left w-100",
            "d-none d-md-block d-lg-block d-xl-block d-xxl-block",
          ])}
        >
          {noteType}
        </Typography>

        <div className="d-flex justify-content-between text-left p-2 w-100">
          <div className={parseClassName([styles.flexProgress])}>
            <ProgressBar value={progress} />
          </div>

          <div
            className={parseClassName([
              styles.flexDelete,
              "justify-content-end",
              "d-none d-md-flex d-lg-flex d-xl-flex d-xxl-flex",
            ])}
          >
            <button
              title="delete"
              aria-label="delete note"
              onClick={() => setShow(true)}
            >
              <TrashSvg />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListContainer;
