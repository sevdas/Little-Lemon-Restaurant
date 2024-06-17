import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const styleByVariant: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
};

const styleBySize: Record<ButtonSize, string> = {
  sm: styles.small,
  md: styles.medium,
  lg: styles.large,
};

export const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={clsx(
        styles.button,
        styleByVariant[variant],
        styleBySize[size],
        className
      )}
    >
      {children}
    </button>
  );
};
