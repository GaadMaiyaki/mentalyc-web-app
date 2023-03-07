import React from "react";

import styles from "./index.module.scss";

import { parseClassName } from "../../../utils";

import Typography from "../typography";
import ListContainer from "./list-container";

import { INotes } from "../../../models";

interface IListView {
  data: INotes[];
  setNotes: React.Dispatch<React.SetStateAction<INotes[]>>;
}

const ListView = ({ data, setNotes }: IListView) => {
  return (
    <>
      <div
        className={parseClassName([
          styles.header,
          "d-flex align-items-center px-4 py-2",
        ])}
      >
        <Typography
          variant="div"
          size="xs"
          classes="d-flex align-items-center justify-content-center me-2 p-2"
        >
          {data.length > 0 ? data.length : 0}
        </Typography>

        <Typography variant="caption" size="sm">
          {data.length > 1 ? "Notes in progress" : "Note in progress"}
        </Typography>
      </div>

      <div className="mt-3">
        <div className="d-flex justify-content-between">
          <Typography variant="div" size="xs" classes="text-left w-100" bold>
            Client
          </Typography>

          <Typography
            variant="div"
            size="xs"
            classes={parseClassName([
              "d-none d-md-block d-lg-block d-xl-block d-xxl-block",
              "text-left w-100",
            ])}
            bold
          >
            Type
          </Typography>

          <Typography
            variant="div"
            size="xs"
            classes={parseClassName([
              "d-none d-md-block d-lg-block d-xl-block d-xxl-block",
              "text-left p-2 w-100",
            ])}
            bold
          >
            ETA
          </Typography>
        </div>

        <div className={styles.listBody}>
          {data.length <= 0 ? (
            <Typography variant="div" size="sm">
              No available notes.
            </Typography>
          ) : (
            data.map((note) => {
              return (
                <ListContainer key={note.id} note={note} setNotes={setNotes} />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ListView;
