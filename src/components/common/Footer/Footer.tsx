import { PropsWithChildren } from "react";
import { ReactComponent as Logo } from "assets/Logo.svg";

import styles from "./Footer.module.scss";

export const Footer = ({ children }: PropsWithChildren) => {
  return (
    <footer className={styles.footer}>
      <Logo />
      {children}
    </footer>
  );
};
