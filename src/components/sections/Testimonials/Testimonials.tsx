import { PropsWithChildren } from "react";

type TestimonialsProps = {
  className?: string;
};

export const Testimonials = ({
  children,
  className,
}: PropsWithChildren<TestimonialsProps>) => {
  return <section className={className}>{children}</section>;
};
