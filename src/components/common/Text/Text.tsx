import React from "react";
import { PropsWithChildren } from "react";
import styles from "./Text.module.scss";
import clsx from "clsx";

type TextSize = "sm" | "md" | "lg" | "blurb";

type TextProps = {
  size?: TextSize;
  className?: string;
};

const styleBySize: Record<TextSize, string> = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
  blurb: styles.blurb,
};

export const Text = ({
  size = "md",
  children,
  className,
}: PropsWithChildren<TextProps>) => {
  return <p className={clsx(className, styleBySize[size])}>{children}</p>;
};
