import { NavItem, Nav, NavItemLink } from "components/common/Nav";
import { ReactComponent as Logo } from "assets/Logo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />

      <Nav className={styles.nav}>
        <NavItem className={styles.navItem}>
          <NavItemLink href="/home" className={styles.navItemLink}>
            Home
          </NavItemLink>
        </NavItem>

        <NavItem className={styles.navItem}>
          <NavItemLink href="/about" className={styles.navItemLink}>
            About
          </NavItemLink>
        </NavItem>

        <NavItem className={styles.navItem}>
          <NavItemLink href="/menu" className={styles.navItemLink}>
            Menu
          </NavItemLink>
        </NavItem>

        <NavItem className={styles.navItem}>
          <NavItemLink href="/reservations" className={styles.navItemLink}>
            Reservations
          </NavItemLink>
        </NavItem>

        <NavItem className={styles.navItem}>
          <NavItemLink href="/online-order" className={styles.navItemLink}>
            Order Online
          </NavItemLink>
        </NavItem>

        <NavItem className={styles.navItem}>
          <NavItemLink href="/login" className={styles.navItemLink}>
            Login
          </NavItemLink>
        </NavItem>
      </Nav>
    </header>
  );
};
