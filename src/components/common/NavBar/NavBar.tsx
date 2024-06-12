import { NavMenuItem, Nav, NavLink, NavMenu } from "components/common/Nav";
import { Header } from "components/common/Header";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <Header>
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
    </Header>
  );
};
