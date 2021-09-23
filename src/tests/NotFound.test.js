import { render, screen } from "@testing-library/react";
import NotFound from "../pages/404";

test("renders NotFound page", () => {
  render(<NotFound />);
  const linkElement = screen.getByText(/Not Found/i);
  expect(linkElement).toBeInTheDocument();
});
