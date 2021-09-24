/** @jsxImportSource @emotion/react */
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../utils/graphql/queries";
import Header from "../components/layouts/Header";
import { css } from "@emotion/react";
import PokemonListCard from "../components/PokemonListCard";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { unionBy } from "lodash";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [metaPage, setMetaPage] = useState({
    limit: 24,
    offset: 0,
  });

  const {
    refetch: pokemonListRefetch,
    loading: pokemonListLoading,
    data: pokemonListData,
  } = useQuery(GET_POKEMONS, {
    variables: metaPage,
  });

  useEffect(() => {
    setPokemons(
      unionBy(
        pokemons,
        pokemonListData?.pokemons?.results || [],
        ({ id }) => id
      )
    );
    //eslint-disable-next-line
  }, [pokemonListData]);

  const getTotalPokemon = () => {
    return pokemonListData?.pokemons?.count || 0;
  };

  const loadNextPagePokemon = () => {
    setMetaPage((node) => ({
      ...node,
      offset: (node.offset += node.limit),
    }));

    pokemonListRefetch(metaPage).catch();
  };

  return (
    <>
      <Header />
      {pokemonListLoading ? (
        <div>Loading...</div>
      ) : (
        <InfiniteScroll
          dataLength={pokemons.length}
          next={loadNextPagePokemon}
          hasMore={pokemons.length < getTotalPokemon()}
          loader={<></>}
        >
          <div css={pokemonList}>
            <div css={pokemonList}>
              {pokemons.map((pokemon) => (
                <PokemonListCard pokemon={pokemon} key={pokemon.id} />
              ))}
            </div>
          </div>
        </InfiniteScroll>
      )}
    </>
  );
}

const pokemonList = css`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

export default PokemonList;
