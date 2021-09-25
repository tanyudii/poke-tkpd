/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import pokeballOutline from "../assets/pokeball-outline.svg";
import { Lazy } from "react-lazy";

function PokemonListCard(props) {
  const { pokemon, image, name, pokemonUsername = null } = props;
  return (
    <Link
      to={`/${pokemon.name}/detail${
        pokemonUsername ? `/${pokemonUsername}` : ""
      }`}
    >
      <div css={pokemonCardWrapper}>
        <img className={"img-backdrop"} src={pokeballOutline} alt="pokeball" />

        <div css={pokemonCardArtwork}>
          <Lazy ltIE9>
            <img className={"pokemon-picture"} src={image} alt={pokemon.name} />
          </Lazy>
        </div>
        <div css={pokemonDetailWrapper}>
          <span className={"id"}>#{String(pokemon.id).padStart(3, "0")}</span>
          <h6 className={"name"}>{name}</h6>
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
  padding: 24px 16px 4px 16px;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0 2px 7px rgb(41 52 76 / 20%);
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:hover {
    .pokemon-picture {
      transform: scale(1.3);
    }
  }

  .img-backdrop {
    position: absolute;
    object-fit: cover;
    height: 100px;
    width: auto;
    opacity: 0.1;
    right: -28px;
    bottom: -28px;
  }
`;

const pokemonCardArtwork = css`
  text-align: center;

  img {
    width: 60px;
    transition: transform 0.2s;
  }
`;

const pokemonDetailWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;

  .id {
    font-size: 12px;
    color: var(--gray-dark);
    font-weight: 600;
  }

  .name {
    white-space: nowrap;
    overflow: hidden;
    width: 120px;
    text-overflow: ellipsis;
    text-transform: capitalize;
    color: var(--orange);
  }
`;

export default PokemonListCard;
