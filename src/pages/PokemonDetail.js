/** @jsxImportSource @emotion/react */
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../utils/graphql/queries";
import PokemonDetailCard from "../components/PokemonDetailCard";
import Loading from "../components/common/Loading";
import { css } from "@emotion/react";
import Header from "../components/layouts/Header";
import { mq } from "../utils/constant";

function PokemonDetail() {
  const { name } = useParams();
  const { loading: pokemonLoading, data: pokemonData } = useQuery(GET_POKEMON, {
    variables: { name },
  });

  return (
    <>
      <div css={headerWrapper}>
        <Header />
      </div>

      <div css={pokemonCardWrapper}>
        <div css={pokemonCard}>
          {pokemonLoading ? (
            <Loading />
          ) : (
            <PokemonDetailCard pokemon={pokemonData.pokemon} />
          )}
        </div>
      </div>
    </>
  );
}

const headerWrapper = css`
  display: none;

  ${mq[0]} {
    display: block;
  }
`;

const pokemonCardWrapper = css`
  min-height: 90vh;
  display: grid;
  place-items: center center;
`;

const pokemonCard = css`
  max-width: 480px;
`;

export default PokemonDetail;
