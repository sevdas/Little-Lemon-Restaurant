import { MenuNav, MenuList, MenuItem, MenuLink } from "components/common/Menu";
import { ReactComponent as Logo } from "assets/Logo.svg";
import styles from "./HeaderNavBar.module.scss";
import { GridLayout } from "components/common/GridLayout/GridLayout";

export const HeaderNavBar = () => {
  return (
    <GridLayout as="header" className={styles.header}>
      <Logo className={styles.logo} />

      <MenuNav className={styles.menuNav}>
        <MenuList type="unordered" className={styles.menuList}>
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
    </GridLayout>
  );
};
