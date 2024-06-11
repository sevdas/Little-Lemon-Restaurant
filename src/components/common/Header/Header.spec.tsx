import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

export {};

test("renders header component correctly", () => {
  render(<Header />);

  //   expect(screen.getByText("Branding and Logo")).toBeInTheDocument();
});
