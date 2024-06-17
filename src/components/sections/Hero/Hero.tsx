import { PropsWithChildren } from "react";
import { Heading } from "components/common/Heading/Heading";
import { Text } from "components/common/Text/Text";
import { Button } from "components/common/Button/Button";

import restaurantInterior from "images/restaurant.jpg";
import styles from "./Hero.module.scss";

type HeroProps = {
  className?: string;
};

export const Hero = ({ className }: HeroProps) => {
  return (
    <section className={className}>
      <article className={styles.content}>
        <Heading as="h1">Little Lemon</Heading>
        <Text size="blurb">Chicago</Text>
        <Text size="sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius iure
          voluptatum impedit quia dolorem reiciendis? Minima eligendi maiores
          minus. Laudantium provident numquam id vel eligendi placeat recusandae
          praesentium, magni corrupti?
        </Text>
        <Button size="sm">Reserve a table</Button>
      </article>
      <img
        src={restaurantInterior}
        alt="Restaurant interior"
        className={styles.image}
      />
    </section>
  );
};
