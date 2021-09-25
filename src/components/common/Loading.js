/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import pokeball from "../../assets/pokeball.svg";

function Loading() {
  return (
    <div css={loadingWrapper}>
      <img
        css={pokeBallShake}
        width={120}
        src={pokeball}
        alt="pokeball-loading"
      />
      <p className={"h6 text-white"}>Please wait ...</p>
    </div>
  );
}

const loadingWrapper = css`
  text-align: center;
`;

const shake = keyframes`
  0% {
    transform: translate(0, 0) rotate(0);
  }
  20% {
    transform: translate(-10px, 0) rotate(-20deg);
  }
  30% {
    transform: translate(10px, 0) rotate(20deg);
  }
  50% {
    transform: translate(-10px, 0) rotate(-10deg);
  }
  60% {
    transform: translate(10px, 0) rotate(10deg);
  }
  100% {
    transform: translate(0, 0) rotate(0);
  }
`;

const pokeBallShake = css`
  animation: ${shake} 0.9s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
`;

export default Loading;
