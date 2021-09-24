import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../utils/graphql/queries";
import PokemonDetailCard from "../components/PokemonDetailCard";
import Loading from "../components/common/Loading";

function PokemonDetail() {
  const { name, id: myPokemonId = null } = useParams();
  const { loading: pokemonLoading, data: pokemonData } = useQuery(GET_POKEMON, {
    variables: { name },
  });

  return (
    <>
      {pokemonLoading ? (
        <Loading />
      ) : (
        <PokemonDetailCard
          myPokemonId={myPokemonId}
          pokemon={pokemonData.pokemon}
        />
      )}
    </>
  );
}

export default PokemonDetail;
