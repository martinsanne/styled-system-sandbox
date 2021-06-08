import styled, { css } from "styled-components";
import { width } from "styled-system";
import Box from "./Box";

const Aspect = styled(Box)(
  ({ ratio = 16 / 10 }) => css`
    position: relative;
    width: 100%;

    // prevent stretch from parent
    display: flex;
    align-self: flex-start;

    // Aspect magic trick
    &:before {
      content: "";
      display: block;
      width: 100%;
      padding-top: ${100 / ratio}%;
    }

    // Fit content
    > * {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    ${width}
  `
);

export default Aspect;
