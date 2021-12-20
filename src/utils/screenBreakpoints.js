export const screenBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const device = {
  sm: `@media(min-width: ${screenBreakpoints.sm}px)`,
  md: `@media(min-width: ${screenBreakpoints.md}px)`,
  lg: `@media(min-width: ${screenBreakpoints.lg}px)`,
  xl: `@media(min-width: ${screenBreakpoints.xl}px)`,
};
