/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import leftIcon from "../assets/left-icon.svg";
import pokeball from "../assets/pokeball.svg";
import renameIcon from "../assets/rename-icon.png";
import releaseIcon from "../assets/release-icon.png";
import PokemonGotcha from "./PokemonGotcha";
import { mq } from "../utils/constant";
import db from "../utils/db";
import { useNavigate } from "react-router";
import { Modal } from "react-bootstrap";

function PokemonDetailCard(props) {
  const { pokemon, pokemonUsername: currentUsername = null } = props;
  const navigate = useNavigate();

  const [pokemonUsername, setPokemonUsername] = useState(currentUsername);
  const [showGotcha, setShowGotcha] = useState(false);

  const [showModal, setModal] = useState(false);
  const setShowModal = () => setModal(true);
  const setHideModal = () => setModal(false);

  const [username, setUsername] = useState(pokemonUsername);
  const [error, setError] = useState("");

  const handleBack = () => navigate(-1);

  const catchPokemon = () => {
    setShowGotcha(true);
  };

  const releasePokemon = async () => {
    await db
      .collection("pokemons")
      .doc({ username: pokemonUsername })
      .delete()
      .then(() => {
        navigate("/my-pokemon");
      });
  };

  const handleSave = () => {
    storeToDatabase({
      ...pokemon,
      username: username,
    }).catch();
  };

  const storeToDatabase = async (pokemonData) => {
    const { username } = pokemonData;

    let currentPokemon = null;

    try {
      currentPokemon = await db
        .collection("pokemons")
        .doc({ username })
        .limit(1)
        .get();
    } catch (e) {}

    if (!currentPokemon) {
      await db
        .collection("pokemons")
        .doc({ username: pokemonUsername })
        .update(pokemonData)
        .then(() => {
          setPokemonUsername(username);
          setHideModal();
          navigate(`/${pokemon.name}/detail/${username}`);
        })
        .catch(() => {
          setError("Nama tidak ditemukan");
        });
    } else {
      setError("Nama telah digunakan oleh " + currentPokemon.name);
    }
  };

  return (
    <>
      {showGotcha ? (
        <PokemonGotcha pokemon={pokemon} />
      ) : (
        <div css={pokemonCardWrapper}>
          <div css={pokemonCard}>
            <div css={actionWrapper} onClick={handleBack}>
              <img
                className={"back-icon"}
                src={leftIcon}
                width={25}
                alt="back"
              />
            </div>

            <div css={pokemonPicture}>
              <div className={"detail-section"}>
                <div>
                  <span className={"name"}>
                    {pokemonUsername || pokemon.name}
                  </span>
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
              {!pokemonUsername ? (
                <div css={catchWrapper} onClick={catchPokemon}>
                  <div className={"catch-action"}>
                    <img src={pokeball} alt="pokeball" />
                    <span>Catch</span>
                  </div>
                </div>
              ) : (
                <div css={releaseRenameWrapper}>
                  <div css={renameWrapper} onClick={setShowModal}>
                    <div className={"rename-action"}>
                      <img src={renameIcon} alt="pokeball" />
                      <span>Rename</span>
                    </div>
                  </div>
                  <div css={releaseWrapper} onClick={releasePokemon}>
                    <div className={"release-action"}>
                      <img src={releaseIcon} alt="pokeball" />
                      <span>Release</span>
                    </div>
                  </div>
                </div>
              )}

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

      <Modal centered show={showModal} onHide={setHideModal}>
        <Modal.Body>
          <div css={formModalWrapper}>
            <div css={formModal}>
              <input
                type="text"
                placeholder={"Name of Pokémon"}
                className={`form-control font-weight-bold ${
                  !!error ? "is-invalid" : ""
                }`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="invalid-feedback">{error}</div>
            </div>
            <div css={modalActionWrapper}>
              <div css={button} onClick={setHideModal}>
                Cancel
              </div>
              <div css={button} className="bg-primary" onClick={handleSave}>
                Rename
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

const pokemonCardWrapper = css`
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 7px rgb(41 52 76 / 20%);
  backdrop-filter: blur(10px);
  min-height: 100vh;

  ${mq[0]} {
    min-height: unset;
    border-radius: 8px;
  }
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
  cursor: pointer;
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

const releaseRenameWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  grid-gap: 8px;
  margin: 16px -16px;
  padding: 12px;
  background: var(--white);
  cursor: pointer;
`;

const releaseWrapper = css`
  &:hover {
    .release-action {
      transform: scale(1.1);
    }
  }

  .release-action {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    grid-gap: 8px;
    transition: transform 0.3s;

    img {
      height: 35px;
    }

    span {
      font-size: 28px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

const renameWrapper = css`
  background: var(--white);
  cursor: pointer;

  &:hover {
    .rename-action {
      transform: scale(1.1);
    }
  }

  .rename-action {
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

const modalActionWrapper = css`
  display: flex;
  flex-direction: row;
  grid-gap: 12px;
  margin-top: 12px;
`;

const formModalWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const formModal = css`
  width: 100%;
`;

const button = css`
  display: grid;
  place-items: center center;
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  width: 150px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  background: var(--secondary);
  text-transform: uppercase;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default PokemonDetailCard;
