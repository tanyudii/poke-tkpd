/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LoadingEgg from "./common/LoadingEgg";
import { useState } from "react";
import { Link } from "react-router-dom";
import db from "../utils/db";

function PokemonGotcha(props) {
  const { pokemon } = props;

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  // const [error, setError] = useState("");

  // return;
  // const possibility = Math.random() > 0.5;
  // if (possibility) {
  //   storePokemon(pokemon);
  //   console.log("asd");
  // } else {
  //   alert("failed catch");
  // }
  // const storePokemon = (pokemonData) => {
  //   db.collection("pokemons").add(pokemonData);
  // };

  const handleResult = (result) => {
    setLoading(false);
    setSuccess(result);
  };

  const handleSave = () => {
    storeToDatabase({
      ...pokemon,
      username: pokemon.name,
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
      db.collection("pokemons").add(pokemonData);
    } else {
      console.log(currentPokemon);
    }
  };

  return (
    <div css={gotchaWrapper}>
      <LoadingEgg handleResult={handleResult} />

      <div css={resultWrapper} className={loading ? "loading" : ""}>
        {success ? (
          <>
            <div css={messageWrapper}>
              <span className={"h3"}>Gotta catch em' all!</span>
            </div>
            <div css={actionWrapper}>
              <Link to={"/"}>
                <div css={button}>Release</div>
              </Link>
              <div css={button} className="bg-primary" onClick={handleSave}>
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
            <div css={actionWrapper}>
              <Link to={"/"}>
                <div css={button}>Back</div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
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

const actionWrapper = css`
  display: flex;
  flex-direction: row;
  grid-gap: 12px;
  margin-top: 12px;
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
