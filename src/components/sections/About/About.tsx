import { PropsWithChildren } from "react";

type AboutProps = {
  className?: string;
};

export const About = ({
  children,
  className,
}: PropsWithChildren<AboutProps>) => {
  // TODO: Temporary style

  return <section className={className}>{children}</section>;
};
