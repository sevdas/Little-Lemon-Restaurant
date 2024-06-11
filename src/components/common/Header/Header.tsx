import { NavMenuItem, Nav, NavLink, NavMenu } from "components/common/Nav";
import { ReactComponent as Logo } from "assets/Logo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />

      <Nav>
        <NavMenu type="unordered" className={styles.navMenu}>
          <NavMenuItem>
            <NavLink href="/home" className={styles.navLink}>
              Home
            </NavLink>
          </NavMenuItem>

          <NavMenuItem>
            <NavLink href="/about" className={styles.navLink}>
              About
            </NavLink>
          </NavMenuItem>

          <NavMenuItem>
            <NavLink href="/menu" className={styles.navLink}>
              Menu
            </NavLink>
          </NavMenuItem>

          <NavMenuItem>
            <NavLink href="/reservations" className={styles.navLink}>
              Reservations
            </NavLink>
          </NavMenuItem>

          <NavMenuItem>
            <NavLink href="/online-order" className={styles.navLink}>
              Order Online
            </NavLink>
          </NavMenuItem>

          <NavMenuItem>
            <NavLink href="/login" className={styles.navLink}>
              Login
            </NavLink>
          </NavMenuItem>
        </NavMenu>
      </Nav>
    </header>
  );
};
