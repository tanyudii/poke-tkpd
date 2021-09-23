import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import LayoutDefault from "../layouts/LayoutDefault";
import { Link } from "react-router-dom";
import pokeBall from "../assets/pokeball.svg";
import Loading from "../components/Loading";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

const gqlVariables = {
  limit: 2,
  offset: 1,
};

function PokemonList() {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  useEffect(() => {
    console.log(loading);
    console.log(data);
    console.log(error);
  });

  return (
    <LayoutDefault>
      <div>Pokemon</div>

      <hr />
      <div style={{ width: 48, height: 48 }}>
        <Loading />
      </div>

      <hr />
      <Link to={"/asda/detail"}>Detail</Link>
      <Link to={"/my-pokemon"}>My Pokemon</Link>
    </LayoutDefault>
  );
}

export default PokemonList;
