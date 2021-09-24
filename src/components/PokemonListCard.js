/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

function PokemonListCard(props) {
  const { pokemon } = props;
  return (
    <Link to={`/${pokemon.name}/detail`}>
      <div css={pokemonCardWrapper}>
        <div css={pokemonCardArtwork}>
          <img src={pokemon.artwork} alt={pokemon.name} />
        </div>
        <div css={pokemonDetailWrapper}>
          <span className={"name"}>{pokemon.name}</span>
          <span className={"owned"}>Owned</span>
        </div>
      </div>
    </Link>
  );
}

const pokemonCardWrapper = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 16px;
`;

const pokemonCardArtwork = css`
  img {
    width: 120px;
  }
`;

const pokemonDetailWrapper = css`
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  align-items: center;

  .name {
    text-transform: capitalize;
  }

  .owned {
    color: red;
  }
`;

export default PokemonListCard;
