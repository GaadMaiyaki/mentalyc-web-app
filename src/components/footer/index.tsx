import React from "react";

import styles from "./index.module.scss";

import { parseClassName } from "./../../utils";

const Footer = () => {
  return (
    <div className="d-flex d-md-none d-lg-none d-xl-none d-xxl-none justify-content-center">
      <div className={parseClassName([styles.line, "position-fixed"])}></div>
    </div>
  );
};

export default Footer;
