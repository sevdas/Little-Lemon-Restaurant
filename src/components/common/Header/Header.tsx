import { ReactComponent as Logo } from "assets/Logo.svg";
import { PropsWithChildren } from "react";

type HeaderProps = {
  className?: string;
};

export const Header = ({
  children,
  className,
}: PropsWithChildren<HeaderProps>) => {
  return (
    <header className={className}>
      <Logo />
      {children}
    </header>
  );
};
