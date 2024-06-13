import {
  MenuNav,
  MenuList,
  MenuItem,
  MenuLink,
} from "components/sections/Menu";
import styles from "./NavBar.module.scss";
import { Header } from "components/common/Header";
import clsx from "clsx";

type NavBarProps = {
  className?: string;
};

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <Header className={clsx(styles.header, className)}>
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
    </Header>
  );
};
