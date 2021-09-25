/** @jsxImportSource @emotion/react */
import Header from "../components/layouts/Header";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Loading from "../components/common/Loading";
import { mq } from "../utils/constant";
import db from "../utils/db";
import PokemonListCard from "../components/PokemonListCard";

function MyPokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPokemon().catch();
  }, []);

  const loadPokemon = async () => {
    await db
      .collection("pokemons")
      .get()
      .then((pokemons) => setPokemons(pokemons));

    setLoading(false);
  };

  return (
    <>
      <Header />

      <div css={pokemonListWrapper}>
        {loading ? (
          <div css={loadingWrapper}>
            <Loading />
          </div>
        ) : pokemons.length ? (
          <div css={pokemonList}>
            {pokemons.map((pokemon, index) => (
              <PokemonListCard
                pokemon={pokemon}
                pokemonUsername={pokemon.username}
                image={pokemon.sprites.front_default}
                name={pokemon.username}
                key={index}
              />
            ))}
          </div>
        ) : (
          <div css={emptyPokemon}>Ups, Your bag is empty!</div>
        )}
      </div>
    </>
  );
}

const emptyPokemon = css`
  font-weight: bold;
  font-size: 24px;
  display: grid;
  place-items: center center;
  height: 80vh;
  color: var(--white);
`;

const pokemonListWrapper = css`
  padding: 16px;
`;

const loadingWrapper = css`
  min-height: 80vh;
  display: grid;
  place-items: center center;
`;

const pokemonList = css`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  ${mq[0]} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  ${mq[1]} {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;

export default MyPokemonList;
