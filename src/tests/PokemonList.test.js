import { render, screen } from "@testing-library/react";
import PokemonList from "../pages/PokemonList";
import { pokemonList } from "../utils/mocks/pokemon-list";

jest.mock("@apollo/react-hooks", () => {
  return {
    __esModule: true,
    useQuery: jest.fn(() => ({ data: { pokemons: pokemonList } })),
  };
});

test("renders PokemonList page", () => {
  render(<PokemonList />);
  const linkElement = screen.getByText(/Pokemon/i);
  expect(linkElement).toBeInTheDocument();
});
