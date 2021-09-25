/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

function PokemonListCard(props) {
  const { pokemon } = props;
  return (
    <Link to={`/${pokemon.name}/detail`}>
      <div css={pokemonCardWrapper}>
        <span css={pokemonOwnedBadge} className="not-owned">
          Not Owned
        </span>
        <div css={pokemonCardArtwork}>
          <img src={pokemon.artwork} alt={pokemon.name} />
        </div>
        <div css={pokemonDetailWrapper}>
          <span className={"id"}>#{String(pokemon.id).padStart(3, "0")}</span>
          <h6 className={"name"}>{pokemon.name}</h6>
        </div>
      </div>
    </Link>
  );
}

const pokemonCardWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 24px 16px 8px 16px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 2px 7px rgb(41 52 76 / 20%);
`;

const pokemonCardArtwork = css`
  text-align: center;
  img {
    width: 60px;
  }
`;

const pokemonDetailWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  line-height: 1.3rem;

  .id {
    font-size: 12px;
    color: var(--gray-dark);
  }

  .name {
    text-transform: capitalize;
  }
`;

const pokemonOwnedBadge = css`
  background: var(--red);
  color: white;
  position: absolute;
  font-size: 12px;
  padding: 4px 4px;
  right: 0;
  top: 0;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;

  &.not-owned {
    background: var(--gray);
    color: white;
  }
`;

export default PokemonListCard;
