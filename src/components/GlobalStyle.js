import { css, Global } from "@emotion/react";

function GlobalStyle() {
  return (
    <Global
      styles={css`
        body {
          overflow-x: hidden;
          background: linear-gradient(
              156deg,
              rgba(0, 207, 225, 1) 0%,
              rgba(93, 243, 201, 1) 100%,
              rgba(90, 235, 192, 1) 100%,
              rgba(0, 0, 0, 1) 100%
            )
            fixed;
          min-height: 100vh;
          /* mobile viewport bug fix */
          min-height: -webkit-fill-available;
        }

        a {
          &:hover {
            text-decoration: none;
          }
        }

        img {
          image-rendering: pixelated;
        }
      `}
    />
  );
}

export default GlobalStyle;
