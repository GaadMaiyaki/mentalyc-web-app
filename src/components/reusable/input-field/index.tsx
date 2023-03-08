import React from "react";

import styles from "./index.module.scss";

import { parseClassName } from "./../../../utils";

interface IInputField {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  value: any;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  classes?: string;
}

const InputField = React.forwardRef(
  (
    { name, type, placeholder, label, classes, ...props }: IInputField,
    ref: any
  ) => {
    return (
      <input
        className={parseClassName([
          "w-100 py-2 px-3",
          styles.field,
          classes ? classes : "",
        ])}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        aria-label={label}
        autoCorrect="false"
        autoFocus={false}
        autoComplete="off"
        spellCheck="false"
  
        {...props}
      />
    );
  }
);

export default InputField;
