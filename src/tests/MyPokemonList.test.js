import { render, screen } from "@testing-library/react";
import MyPokemonList from "../pages/MyPokemonList";

test("renders MyPokemonList page", () => {
  render(<MyPokemonList />);
  const linkElement = screen.getByText(/My Pokemon/i);
  expect(linkElement).toBeInTheDocument();
});
