import { getEmBreakpoints, getBpShortcuts } from "./utils";

/* 

Define unitless breakpoints for simplicity and better flexibility

*/
export const untilessBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1400,
  xxl: 1800
};

/*

styled-system needs breakpoints in em

*/
const breakpoints = getEmBreakpoints(untilessBreakpoints);

/*

Create bp-shortcut for styled-components

Example:

const MyComp = styled.div(({theme}) => css`
  width: 100%;
  ${theme.bp.md} {
    width: 50%;
  }
`)

*/
const bp = getBpShortcuts(untilessBreakpoints);

const brandColors = {
  black: "#000",
  blue: "#0069FF",
  green: "#1CD300",
  red: "#FA4D1E",
  pink: "#FFB2A7",
  yellow: "#FFCA3A"
};

const baseTheme = {
  bp,
  breakpoints,
  fonts: {
    sans: `Helvetica, sans-serif`,
    serif: `"Times New Roman", Times, serif`
  },
  fontSizes: [10, 14, 18, 24, 32, 48, 64, 81],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    ...brandColors,
    grays: {
      0: "#F3F3F4",
      1: "#CECECE",
      2: "#7B7B7B"
    },
    primary: brandColors.blue
  },
  radii: [0, 2, 4, 8, 24],
  aspects: {
    landscape: 16 / 10,
    widescreen: 1 / 2,
    square: 1 / 1
  }
};

const theme = {
  ...baseTheme
};

export default theme;
