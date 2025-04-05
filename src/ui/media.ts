export enum Breackpoint {
  SMW = 768,
  MDW = 1420,
  XSH = 700,
  SMH = 750,
}

export const Media = {
  SMW: `@media screen and (min-width: ${Breackpoint.SMW}px)`,
  MDW: `@media screen and (min-width: ${Breackpoint.MDW}px)`,
  XSH: `@media screen and (max-height: ${Breackpoint.XSH}px)`,
  SMH: `@media screen and (max-height: ${Breackpoint.SMH}px)`,
};
