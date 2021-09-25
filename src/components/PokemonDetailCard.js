/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import leftIcon from "../assets/left-icon.svg";
import pokeball from "../assets/pokeball.svg";
import PokemonGotcha from "./PokemonGotcha";

function PokemonDetailCard(props) {
  const { pokemon } = props;

  const [showGotcha, setShowGotcha] = useState(true);

  const catchPokemon = () => {
    setShowGotcha(true);
  };

  return (
    <>
      {showGotcha ? (
        <PokemonGotcha pokemon={pokemon} />
      ) : (
        <div css={pokemonCardWrapper}>
          <div css={pokemonCard}>
            <div css={actionWrapper}>
              <Link to={"/"}>
                <img
                  className={"back-icon"}
                  src={leftIcon}
                  width={25}
                  alt="back"
                />
              </Link>
            </div>

            <div css={pokemonPicture}>
              <div className={"detail-section"}>
                <div>
                  <span className={"name"}>{pokemon.name}</span>
                  <div className={"type-items"}>
                    {pokemon.types.map(({ type }, index) => (
                      <span className={`type-item ${type.name}`} key={index}>
                        {type.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={"mt-2"}>
                  <span className={"h5"}>
                    #{String(pokemon.id).padStart(3, "0")}
                  </span>
                </div>
              </div>
              <div className={"picture-section"}>
                <img
                  className={"picture"}
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
              </div>
            </div>

            <div css={pokemonDetail}>
              <div css={catchWrapper} onClick={catchPokemon}>
                <div className={"catch-action"}>
                  <img src={pokeball} alt="pokeball" />
                  <span>Catch</span>
                </div>
              </div>

              <div className={"section-moves"}>
                <p className={"h6 font-weight-bold"}>Moves:</p>
                <div className={"items"}>
                  {pokemon.moves.map(({ move }, index) => (
                    <span className={"item"} key={index}>
                      {move.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const pokemonCardWrapper = css`
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 7px rgb(41 52 76 / 20%);
  backdrop-filter: blur(10px);
  border-radius: 8px;
`;

const pokemonCard = css`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
  padding: 16px;
`;

const actionWrapper = css`
  display: flex;
  flex-direction: row;
`;

const pokemonPicture = css`
  .detail-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .name {
      font-size: 24px;
      font-weight: bold;
      text-transform: capitalize;
    }

    .type-items {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      grid-gap: 4px;

      .type-item {
        padding: 2px 8px;
        border-radius: 6px;
        background: var(--secondary);
        color: var(--white);
        font-size: 12px;
        text-transform: capitalize;

        &.grass {
          background-color: #78c850;
        }

        &.fire {
          background-color: #f08030;
        }

        &.water {
          background-color: #6890f0;
        }

        &.bug {
          background-color: #a8b820;
        }

        &.normal {
          background-color: #a8a878;
        }

        &.poison {
          background-color: #a040a0;
        }

        &.electric {
          background-color: #f8d030;
        }

        &.ground {
          background-color: #e0c068;
        }

        &.fairy {
          background-color: #ee99ac;
        }

        &.fighting {
          background-color: #c03028;
        }

        &.psychic {
          background-color: #f85888;
        }

        &.rock {
          background-color: #b8a038;
        }

        &.ghost {
          background-color: #705898;
        }

        &.ice {
          background-color: #98d8d8;
        }

        &.dragon {
          background-color: #7038f8;
        }

        &.flying {
          background-color: #3d7dca;
        }
      }
    }
  }

  .picture-section {
    display: grid;
    place-items: center center;
    margin: -30px 0;

    .picture {
      height: 180px;
    }
  }
`;

const catchWrapper = css`
  margin: 16px -16px;
  padding: 12px;
  background: var(--white);
  cursor: pointer;

  &:hover {
    .catch-action {
      transform: scale(1.1);
    }
  }

  .catch-action {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    grid-gap: 8px;
    transition: transform 0.3s;

    img {
      height: 40px;
    }

    span {
      font-size: 28px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

const pokemonDetail = css`
  .section-moves {
    .move-title {
      font-weight: bold;
      margin-bottom: 2px;
    }

    .items {
      display: flex;
      flex-wrap: wrap;
      grid-gap: 8px;
      max-height: 280px;
      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      overflow-y: scroll;

      ::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
      }

      .item {
        padding: 2px 8px;
        border-radius: 6px;
        background: var(--secondary);
        color: var(--white);
        font-size: 14px;
        text-transform: capitalize;
      }
    }
  }
`;

export default PokemonDetailCard;
