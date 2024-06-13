import { PropsWithChildren } from "react";

type HighlightsProps = {
  className?: string;
};

export const Highlights = ({
  children,
  className,
}: PropsWithChildren<HighlightsProps>) => {
  return <section className={className}>{children}</section>;
};
