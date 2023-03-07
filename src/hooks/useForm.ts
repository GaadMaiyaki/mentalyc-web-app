import React, { useReducer } from "react";

type UseFormReturn<T> = {
  values: T;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFieldValue: React.Dispatch<Partial<T>>;
};

const useForm = <T extends Record<string, any>>({
  initialValues = {} as T,
}: { initialValues?: T } = {}): UseFormReturn<T> => {
  const [values, setValues] = useReducer(
    (state: T, next: Partial<T>) => ({ ...state, ...next }),
    initialValues
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ [name]: value } as Partial<T>);
  };

  return { values, handleChange, setFieldValue: setValues };
};

export default useForm;
