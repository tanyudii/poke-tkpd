import { css, Global } from "@emotion/react";

function GlobalStyle() {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
        }

        a {
          text-decoration: none;
          &:hover {
            text-decoration: none;
          }
        }
      `}
    />
  );
}

export default GlobalStyle;
