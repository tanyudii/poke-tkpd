/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import pokemonLogo from "../../assets/pokemon-logo.svg";
import bagIcon from "../../assets/bag-icon.svg";
import exploreIcon from "../../assets/explore-icon.svg";
import { useEffect, useState } from "react";
import db from "../../utils/db";

function Header() {
  const [totalMyPokemon, setTotalMyPokemon] = useState(0);

  useEffect(() => {
    loadData().catch();
  }, []);

  const loadData = async () => {
    await db
      .collection("pokemons")
      .get()
      .then((result) => {
        setTotalMyPokemon(result.length);
      });
  };

  return (
    <div css={headerWrapper}>
      <div>
        <Link to={"/"}>
          <img css={headerLogo} src={pokemonLogo} alt="pokemon-logo" />
        </Link>
      </div>

      <div css={headerActionWrapper}>
        <Link to={"/"}>
          <div css={exploreWrapper}>
            <img className={"explore-icon"} src={exploreIcon} alt="bag-icon" />
          </div>
        </Link>

        <Link to={"/my-pokemon"}>
          <div css={myPokemonBagWrapper}>
            <div
              className={`bag-counter ${totalMyPokemon > 0 ? "" : "no-data"}`}
            >
              {totalMyPokemon}
            </div>
            <img className={"bag-icon"} src={bagIcon} alt="bag-icon" />
          </div>
        </Link>
      </div>
    </div>
  );
}

const headerWrapper = css`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 8px 16px;
  z-index: 50;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 7px rgb(41 52 76 / 20%);
  backdrop-filter: blur(10px);
  border-radius: 0 0 8px 8px;
`;

const headerLogo = css`
  transition: transform 0.2s;
  height: 40px;

  &:hover {
    transform: scale(1.1);
  }
`;

const headerActionWrapper = css`
  display: flex;
  flex-direction: row;
  grid-gap: 12px;
`;

const exploreWrapper = css`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  .explore-icon {
    height: 40px;
  }
`;

const myPokemonBagWrapper = css`
  position: relative;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  .bag-icon {
    height: 40px;
  }

  .bag-counter {
    text-align: center;
    right: 0;
    top: 0;
    font-size: 12px;
    padding: 2px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    height: 16px;
    min-width: 8px;
    line-height: 16px;
    position: absolute;
    color: var(--white);
    background-color: #e02954;

    &.no-data {
      display: none;
    }
  }
`;

export default Header;
