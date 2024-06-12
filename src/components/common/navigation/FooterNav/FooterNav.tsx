import { Footer } from "components/common/Footer";
import { MenuNav, MenuList, MenuItem, MenuLink } from "components/common/Menu";
import { ReactComponent as InstagramIcon } from "assets/Instagram.svg";
import { ReactComponent as FacebookIcon } from "assets/Facebook.svg";
import { ReactComponent as TikTokIcon } from "assets/TikTok.svg";
import { ReactComponent as PinterestIcon } from "assets/Pinterest.svg";
import styles from "./Footer.module.scss";

export const FooterNav = () => {
  return (
    <Footer>
      <MenuNav className={styles.menuNav}>
        <MenuList type="unordered">
          <h6>Doormat Navigation</h6>
          <MenuItem>
            <MenuLink href="/hello">Hello</MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href="/about">About</MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href="/menu">Menu</MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href="/reservations">Reservations</MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href="/online-order">Order Online</MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href="/login">Login</MenuLink>
          </MenuItem>
        </MenuList>

        <section>
          <h6>Contact</h6>
          <address>
            <MenuItem>169 Church Rd, London SW13 9HR</MenuItem>
            <MenuItem>
              <MenuLink href="tel:+123456789">Phone number</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                href="mailto:little.lemon@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </MenuLink>
            </MenuItem>
          </address>
        </section>

        <section>
          <h6>Social Media Links</h6>

          <MenuList type="ordered" className={styles.menuListSocial}>
            <MenuItem>
              <MenuLink
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                <InstagramIcon />
              </MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <FacebookIcon />
              </MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Tiktok page"
              >
                <TikTokIcon />
              </MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Pinterest page"
              >
                <PinterestIcon />
              </MenuLink>
            </MenuItem>
          </MenuList>
        </section>
      </MenuNav>
    </Footer>
  );
};
