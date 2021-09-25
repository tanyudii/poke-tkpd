/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LoadingEgg from "./common/LoadingEgg";
import { useState } from "react";
import { Link } from "react-router-dom";
import db from "../utils/db";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router";

function PokemonGotcha(props) {
  const { pokemon } = props;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  const [showModal, setModal] = useState(false);
  const setShowModal = () => setModal(true);
  const setHideModal = () => setModal(false);

  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleResult = (result) => {
    setUsername(pokemon.name);
    setLoading(false);
    setSuccess(result);
  };

  const handleCancel = () => navigate("/");
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
        .add(pokemonData)
        .then(() => {
          navigate("/");
        });
    } else {
      setError("Nama telah digunakan oleh " + currentPokemon.name);
    }
  };

  return (
    <>
      {" "}
      <div css={gotchaWrapper}>
        <LoadingEgg handleResult={handleResult} />

        <div css={resultWrapper} className={loading ? "loading" : ""}>
          {success ? (
            <>
              <div css={messageWrapper}>
                <span className={"h3"}>Gotta catch them' all!</span>
              </div>
              <div css={modalActionWrapper}>
                <Link to={"/"}>
                  <div css={button}>Release</div>
                </Link>
                <div css={button} className="bg-primary" onClick={setShowModal}>
                  Keep
                </div>
              </div>
            </>
          ) : (
            <>
              <div css={messageWrapper}>
                <span className={"h3"}>Failed</span>
                <span className={"h5"}>It ran away...</span>
              </div>
              <div css={modalActionWrapper}>
                <Link to={"/"}>
                  <div css={button}>Back</div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
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
              <div css={button} onClick={handleCancel}>
                Cancel
              </div>
              <div css={button} className="bg-primary" onClick={handleSave}>
                Save
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

const gotchaWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const resultWrapper = css`
  opacity: 1;
  -webkit-transition: opacity 0.2s ease-in;
  -moz-transition: opacity 0.2s ease-in;
  -o-transition: opacity 0.2s ease-in;

  display: flex;
  flex-direction: column;
  grid-gap: 12px;

  &.loading {
    opacity: 0;
  }
`;

const messageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  grid-gap: 12px;
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

export default PokemonGotcha;
