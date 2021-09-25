/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Navigation() {
  return <div css={navigationWrapper}>Catch Me</div>;
}

const navigationWrapper = css`
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default Navigation;
