import { useEffect, useMemo, useState } from "react";
import { db } from "../utils/db";

function PokemonDetailCard(props) {
  const { pokemon, myPokemonId } = props;
  const [myPokemon] = useState(
    !myPokemonId
      ? null
      : db.collection("pokemons").doc({ key: myPokemonId }).get()
  );

  useEffect(() => {
    (async () => {
      const asd = await db
        .collection("pokemons")
        .doc({ id: myPokemonId })
        .get();

      console.log(asd, "asd");
    })();
  });

  const catchPokemon = () => {
    const possibility = Math.random() > 0.5;
    if (possibility) {
      storePokemon(pokemon);
      console.log("asd");
    } else {
      alert("failed catch");
    }
  };

  const storePokemon = (pokemonData) => {
    db.collection("pokemons").add(pokemonData);
  };

  const releasePokemon = () => {
    db.collection("my_data").doc({ id: myPokemonId }).delete();
  };

  return (
    <>
      <div>asd</div>

      <button onClick={catchPokemon}>Catch Pokemon</button>

      {!!myPokemon && (
        <>
          <hr />
          <button onClick={releasePokemon}>Release Pokemon</button>
        </>
      )}
    </>
  );
}

export default PokemonDetailCard;
