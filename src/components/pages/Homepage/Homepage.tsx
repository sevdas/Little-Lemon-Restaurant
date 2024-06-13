import { Footer } from "components/common/Footer";
import { NavBar } from "components/sections/NavBar";
import styles from "./Homepage.module.scss";
import { Hero } from "components/sections/Hero";
import { Highlights } from "components/sections/Highlights";
import { Testimonials } from "components/sections/Testimonials";
import { About } from "components/sections/About";

export const Homepage = () => {
  return (
    <div className={styles.container}>
      <NavBar className={styles.navbar} />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer className={styles.footer} />
    </div>
  );
};
