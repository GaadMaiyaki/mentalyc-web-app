import { parseClassName } from "./../../../utils";

import styles from "./index.module.scss";

interface IProgressBar {
  value: number;
}

const ProgressBar = ({ value }: IProgressBar) => {
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      className={parseClassName([styles.wrapper, "position-relative w-100"])}
    >
      <div
        className={parseClassName([styles.i, "position-absolute"])}
        style={{
          width: `${value}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
