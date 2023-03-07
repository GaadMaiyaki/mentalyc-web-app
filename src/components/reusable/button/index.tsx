import styles from "./index.module.scss";

import { parseClassName } from "../../../utils";

interface IButton {
  title: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  classes?: string;
  type: "button" | "submit" | "reset";
  color: "gradient";
  size: "md" | "sm" | "lg";
  disabled: boolean;
}

const Button = ({
  label,
  classes,
  color,
  size,
  disabled,
  ...props
}: IButton) => {
  return (
    <button
      {...props}
      aria-label={label}
      aria-disabled={disabled}
      disabled={disabled}
      className={parseClassName([
        classes ? classes : "",
        styles.btn,
        styles[color],
        styles[size],
      ])}
    >
      {label}
    </button>
  );
};

export default Button;
