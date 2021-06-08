export const emSize = (val) => {
  if (typeof val === "number") {
    return `${val / 16}em`;
  }
  return val;
};

export const remSize = (px) => `${px / 10}rem`;
export const emCalc = (px) => px / 16;

export const getEmBreakpoints = (untilessBreakpoints) => {
  // Populate the breakpoints array
  return Object.keys(untilessBreakpoints).reduce((acc, key) => {
    // Convert unitless value to em as it's required by styled-system
    const emBp = emSize(untilessBreakpoints[key]);
    // Add to brakpoint array
    acc.push(emBp);
    // Bind aliases to access by key (breakpoints.xs, breakpoints.sm, ...)
    acc[key] = emBp;
    return acc;
  }, []);
};

export const getBpShortcuts = (untilessBreakpoints) => {
  return Object.keys(untilessBreakpoints).reduce((acc, key) => {
    const emBp = emSize(untilessBreakpoints[key]);
    acc[key] = `@media screen and (min-width: ${emBp})`;
    return acc;
  }, []);
};
