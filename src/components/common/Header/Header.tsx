import { ReactComponent as Logo } from "assets/Logo.svg";
import styles from "./Header.module.scss";
import { PropsWithChildren } from "react";

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <header className={styles.header}>
      <Logo />
      {children}
    </header>
  );
};
