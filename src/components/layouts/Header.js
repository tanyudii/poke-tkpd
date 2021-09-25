/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import pokemonLogo from "../../assets/pokemon-logo.svg";
import bagIcon from "../../assets/bag-icon.svg";

function BadgeMyPokemon() {
  return <div css={badgeCounter}>3</div>;
}

function Header() {
  return (
    <div css={headerWrapper}>
      <div css={headerLogoWrapper}>
        <Link to={"/"}>
          <img src={pokemonLogo} alt="pokemon-logo" />
        </Link>
      </div>
      <div css={headerActionWrapper}>
        <Link to={"/my-pokemon"}>
          <BadgeMyPokemon />
          <img src={bagIcon} alt="bag-icon" />
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
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 2px 7px rgb(41 52 76 / 20%);
  backdrop-filter: blur(10px);
  border-radius: 0 0 8px 8px;
`;

const headerLogoWrapper = css`
  img {
    width: 110px;
  }
`;

const headerActionWrapper = css`
  position: relative;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  img {
    padding-top: 4px;
    width: 36px;
  }
`;

const badgeCounter = css`
  text-align: center;
  right: -2px;
  top: 1px;
  font-size: 12px;
  padding: 0 4px;
  border-radius: 6px;
  height: 16px;
  min-width: 8px;
  line-height: 16px;
  position: absolute;
  color: white;
  background-color: #e02954;
`;

export default Header;
