import { css } from "styled-components";
import CalmExtra from "../assets/fonts/CalmExtra.woff";
import Scriptorama from "../assets/fonts/Scriptorama.woff";
import Patriciana from "../assets/fonts/Scriptorama.woff";
import Tahoma from "../assets/fonts/Tahoma.woff2";

export const Fonts = css`
  @font-face {
    font-family: "CalmExtra";
    src: url(${CalmExtra}) format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Scriptorama";
    src: url(${Scriptorama}) format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Patriciana";
    src: url(${Patriciana}) format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Tahoma";
    src: url(${Tahoma}) format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;
