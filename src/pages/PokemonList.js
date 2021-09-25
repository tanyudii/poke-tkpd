/** @jsxImportSource @emotion/react */
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../utils/graphql/queries";
import Header from "../components/layouts/Header";
import { css } from "@emotion/react";
import PokemonListCard from "../components/PokemonListCard";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { unionBy } from "lodash";
import Loading from "../components/common/Loading";
import { mq } from "../utils/constant";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [metaPage, setMetaPage] = useState({
    limit: 42,
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

      <div css={pokemonListWrapper}>
        {pokemonListLoading ? (
          <div css={loadingWrapper}>
            <Loading />
          </div>
        ) : (
          <InfiniteScroll
            dataLength={pokemons.length}
            next={loadNextPagePokemon}
            hasMore={pokemons.length < getTotalPokemon()}
            useWindow={false}
            loader={<></>}
          >
            <div css={pokemonList}>
              {pokemons.map((pokemon, index) => (
                <PokemonListCard
                  pokemon={pokemon}
                  name={pokemon.name}
                  image={pokemon.artwork}
                  key={pokemon.id}
                />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </>
  );
}

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

export default PokemonList;
