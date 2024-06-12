import { PropsWithChildren, ElementType } from "react";
import clsx from "clsx";
import styles from "./GridLayout.module.scss";

interface GridLayoutProps extends PropsWithChildren {
  as?: ElementType;
  className?: string;
}

export const GridLayout = ({
  children,
  as: Component = "div",
  className,
}: GridLayoutProps) => {
  return (
    <Component className={clsx(className, styles.grid)}>{children}</Component>
  );
};
