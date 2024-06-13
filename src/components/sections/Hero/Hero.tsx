import { PropsWithChildren } from "react";

type HeroProps = {
  className?: string;
};

export const Hero = ({ children, className }: PropsWithChildren<HeroProps>) => {
  return <section className={className}>{children}</section>;
};
