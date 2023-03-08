import useForm from "../../hooks/useForm";

import { IInputValues } from "../../models";

import Button from "../reusable/button";
import InputField from "../reusable/input-field";
import SelectField from "../reusable/select-field";
import Typography from "../reusable/typography";

const initialValues = { client_name: "", note_type: "" };

const UploadForm = ({
  isSleeping,
  handleSubmit,
}: {
  isSleeping: boolean;
  handleSubmit: (
    values: IInputValues
  ) => (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}) => {
  const { values, handleChange, setFieldValue } = useForm({
    initialValues,
  });

  const shouldDisable = !values.client_name || !values.note_type;

  return (
    <form className="mt-2 text-center" onSubmit={handleSubmit(values)}>
      <Typography variant="h6" size="sm" bold>
        Complete Your Upload
      </Typography>

      <Typography
        variant="body"
        size="xs"
        classes="mt-2"
        color="secondary-light"
        thin
      >
        Fill in the details below to complete your upload
      </Typography>

      <SelectField
        name="note_type"
        label="Note type"
        value={values["note_type"] || ""}
        options={[
          "Progress note - 80 left",
          "Soap note - 80 left",
          "EMDR note- 80 left",
          "Couples therapy note - 80 left",
          "Family therapy note - 80 left",
        ]}
        onChange={setFieldValue}
        classes="mb-5 mt-4"
        placeholder="Select note type"
      />

      <InputField
        name="client_name"
        type="text"
        label="Client name"
        placeholder="Enter client name"
        value={values["client_name"] || ""}
        onChange={handleChange}
        classes="my-0 my-lg-3 my-xl-3 my-xxl-3"
      />

      <aside className="d-flex justify-content-center mt-5 mb-3">
        <Button
          disabled={isSleeping || shouldDisable}
          classes="px-3 py-2 d-flex justify-content-center"
          title={isSleeping ? "Please wait..." : "Finish Upload"}
          label={isSleeping ? "Please wait..." : "Finish Upload"}
          color="gradient"
          size="md"
          type="submit"
        />
      </aside>
    </form>
  );
};

export default UploadForm;
