import React from "react";
import NotFound from "../pages/404";
import PokemonList from "../pages/PokemonList";
import PokemonDetail from "../pages/PokemonDetail";
import MyPokemonList from "../pages/MyPokemonList";

export const routes = [
  {
    path: "/",
    element: <PokemonList />,
  },
  {
    path: "/:name/detail",
    element: <PokemonDetail />,
  },
  { path: "/my-pokemon", element: <MyPokemonList /> },
  { path: "/my-pokemon/:name/:id", element: <PokemonDetail /> },
  {
    path: "*",
    element: <NotFound />,
  },
];