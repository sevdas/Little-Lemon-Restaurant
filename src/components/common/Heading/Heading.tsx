import React from "react";
import { PropsWithChildren } from "react";
import styles from "./Heading.module.scss";
import clsx from "clsx";

type HeadingSize = "sm" | "md" | "lg";

type HeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: HeadingSize;
  className?: string;
};

const styleBySize: Record<HeadingSize, string> = {
  sm: styles.small,
  md: styles.medium,
  lg: styles.large,
};

export const Heading = ({
  as = "h1",
  size = "md",
  children,
  className,
}: PropsWithChildren<HeadingProps>) => {
  const Tag = as;
  return <Tag className={clsx(className, styleBySize[size])}>{children}</Tag>;
};
