import { PropsWithChildren } from "react";

type MainProps = {
  className?: string;
};

export const Main = ({ children, className }: PropsWithChildren<MainProps>) => {
  // TODO: Temporary style

  return (
    <main className={className} style={{ height: "500px" }}>
      {children}
    </main>
  );
};
