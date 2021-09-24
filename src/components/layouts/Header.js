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
  background: white;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  box-shadow: -7px -7px 12px 0px rgb(0 0 0);
  justify-content: space-between;
  align-items: center;
`;

const headerLogoWrapper = css`
  img {
    width: 100px;
  }
`;

const headerActionWrapper = css`
  position: relative;

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
