import { Nav, NavMenuItem, NavLink, NavMenu } from "components/common/Nav";
import { ReactComponent as Logo } from "assets/Logo.svg";
import { ReactComponent as InstagramIcon } from "assets/Instagram.svg";
import { ReactComponent as FacebookIcon } from "assets/Facebook.svg";
import { ReactComponent as TikTokIcon } from "assets/TikTok.svg";
import { ReactComponent as PinterestIcon } from "assets/Pinterest.svg";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />

      <Nav className={styles.nav}>
        <NavMenu type="unordered">
          <h6>Doormat Navigation</h6>
          <NavMenuItem>
            <NavLink href="/hello">Hello</NavLink>
          </NavMenuItem>

          <NavMenuItem>
            <NavLink href="/about">About</NavLink>
          </NavMenuItem>

          <NavMenuItem>
            <NavLink href="/menu">Menu</NavLink>
          </NavMenuItem>

          <NavMenuItem>
            <NavLink href="/reservations">Reservations</NavLink>
          </NavMenuItem>

          <NavMenuItem>
            <NavLink href="/online-order">Order Online</NavLink>
          </NavMenuItem>

          <NavMenuItem>
            <NavLink href="/login">Login</NavLink>
          </NavMenuItem>
        </NavMenu>

        <section>
          <h6>Contact</h6>
          <address>
            <NavMenuItem>169 Church Rd, London SW13 9HR</NavMenuItem>
            <NavMenuItem>
              <NavLink href="tel:+123456789">Phone number</NavLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavLink
                href="mailto:little.lemon@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </NavLink>
            </NavMenuItem>
          </address>
        </section>

        <section>
          <h6>Social Media Links</h6>

          <NavMenu type="ordered" className={styles.navMenuSocial}>
            <NavMenuItem>
              <NavLink
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                <InstagramIcon />
              </NavLink>
            </NavMenuItem>

            <NavMenuItem>
              <NavLink
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <FacebookIcon />
              </NavLink>
            </NavMenuItem>

            <NavMenuItem>
              <NavLink
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Tiktok page"
              >
                <TikTokIcon />
              </NavLink>
            </NavMenuItem>

            <NavMenuItem>
              <NavLink
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Pinterest page"
              >
                <PinterestIcon />
              </NavLink>
            </NavMenuItem>
          </NavMenu>
        </section>
      </Nav>
    </footer>
  );
};
