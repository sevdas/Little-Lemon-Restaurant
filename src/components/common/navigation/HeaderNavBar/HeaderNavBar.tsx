import { MenuNav, MenuList, MenuItem, MenuLink } from "components/common/Menu";
import { Header } from "components/common/Header";
import styles from "./HeaderNavBar.module.scss";

export const HeaderNavBar = () => {
  return (
    <Header>
      <MenuNav>
        <MenuList type="unordered" className={styles.menuNav}>
          <MenuItem>
            <MenuLink href="/home" className={styles.menuLink}>
              Home
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href="/about" className={styles.menuLink}>
              About
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href="/menu" className={styles.menuLink}>
              Menu
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href="/reservations" className={styles.menuLink}>
              Reservations
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href="/online-order" className={styles.menuLink}>
              Order Online
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href="/login" className={styles.menuLink}>
              Login
            </MenuLink>
          </MenuItem>
        </MenuList>
      </MenuNav>
    </Header>
  );
};
