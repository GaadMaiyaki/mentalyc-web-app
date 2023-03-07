import React from "react";

import styles from "./index.module.scss";

import { parseClassName } from "./../../../utils";

interface ITypography {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "caption"
    | "div";
  color?: "black" | "primary" | "secondary-light";
  align?: "left" | "center" | "right" | "justify";
  size: "xs" | "sm" | "md" | "lg";
  classes?: string;
  bold?: boolean;
  thin?: boolean;
  italic?: boolean;
  underline?: boolean;
  children: React.ReactNode;
}

type TagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "div";

const variantToTag: Record<string, TagType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  caption: "span",
  div: "div",
};

const Typography = ({
  variant = "h1",
  color = "black",
  bold = false,
  thin = false,
  italic = false,
  underline = false,
  children,
  classes,
  size,
}: ITypography) => {
  let Tag: TagType = variantToTag[variant];

  return (
    <Tag
      className={parseClassName([
        bold ? styles.bold : "",
        thin ? styles.thin : "",
        styles[color],
        styles[size],
        underline ? styles.underline : "",
        italic ? styles.italic : "",
        classes ? classes : "",
      ])}
    >
      {children}
    </Tag>
  );
};

export default Typography;
