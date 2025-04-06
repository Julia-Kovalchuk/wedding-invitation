export enum Breackpoint {
  XSW = 410,
  SMW = 768,
  MDW = 1420,
  XXSH = 650,
  XSH = 700,
  SMH = 750,
}

export const Media = {
  XSW: `@media screen and (max-width: ${Breackpoint.XSW}px)`,
  SMW: `@media screen and (min-width: ${Breackpoint.SMW}px)`,
  MDW: `@media screen and (min-width: ${Breackpoint.MDW}px)`,
  XXSH: `@media screen and (max-height: ${Breackpoint.XXSH}px)`,
  XSH: `@media screen and (max-height: ${Breackpoint.XSH}px)`,
  SMH: `@media screen and (max-height: ${Breackpoint.SMH}px)`,
};
