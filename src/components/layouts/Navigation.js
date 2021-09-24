/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Navigation() {
  return <div css={navigationWrapper}>Navigation</div>;
}

const navigationWrapper = css`
  position: fixed;
  bottom: 0;
`;

export default Navigation;
