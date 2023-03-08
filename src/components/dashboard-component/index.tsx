import React from "react";

import HelpSvg from "../../assets/svgs/help";

import Button from "../reusable/button";
import ListView from "../reusable/list-view";
import Modal from "../reusable/modal";
import Typography from "../reusable/typography";

import UploadForm from "../upload-form";

import useProgress from "./../../hooks/useProgress";
import useSleep from "./../../hooks/useSleep";

import { IInputValues, INotes } from "../../models";

const DashboardComponent = () => {
  const [show, setShow] = React.useState(false);

  const handleShow = () => setShow(true);

  const [notes, setNotes] = React.useState<INotes[]>([]);

  const { isSleeping, sleep } = useSleep();

  useProgress({ notes, setNotes, isSleeping });

  const handleSubmit =
    (values: IInputValues) => async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!values.client_name || !values.note_type) return;

      await sleep();

      setNotes((notes) => [
        ...notes,
        { id: Date.now(), progress: 0, ...values },
      ]);

      setShow(false);
    };

  return (
    <>
      <Modal
        show={show}
        setShow={setShow}
        columnLayout="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-6"
      >
        <UploadForm isSleeping={isSleeping} handleSubmit={handleSubmit} />
      </Modal>

      <section className="mt-4">
        <aside className="d-flex justify-content-between">
          <Typography variant="h6" size="sm">
            Hi, Maria
          </Typography>

          <HelpSvg />
        </aside>

        <Typography variant="body" size="md" bold classes="my-3">
          Upload your session’s recordings
        </Typography>

        <Button
          disabled={false}
          classes="w-100 py-2"
          title="upload"
          label="Upload"
          color="gradient"
          size="md"
          type="submit"
          onClick={handleShow}
        />

        <aside className="py-5">
          <ListView data={notes} setNotes={setNotes} />
        </aside>
      </section>
    </>
  );
};

export default DashboardComponent;
