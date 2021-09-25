import { css, Global } from "@emotion/react";

function GlobalStyle() {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          min-width: 100vw;
          min-height: 100vh;
          overflow-x: hidden;
          background: linear-gradient(
            156deg,
            rgba(0, 207, 225, 1) 0%,
            rgba(93, 243, 201, 1) 100%,
            rgba(90, 235, 192, 1) 100%,
            rgba(0, 0, 0, 1) 100%
          );
          background-attachment: fixed;
        }

        a {
          &:hover {
            text-decoration: none;
          }
        }
      `}
    />
  );
}

export default GlobalStyle;
