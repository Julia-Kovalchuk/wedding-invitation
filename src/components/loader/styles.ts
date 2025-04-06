import styled, { keyframes } from "styled-components";

const drawHeart = keyframes`
  0% {
    stroke-dashoffset: 400;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: white;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Svg = styled.svg`
  width: 80px;
  height: 80px;
`;

const Path = styled.path`
  fill: none;
  stroke: ${(props) => props.theme.colors.danger};
  stroke-width: 2;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: ${drawHeart} 2s infinite forwards;
  font-family: "Tahoma";
  font-family: "Scriptorama";
  font-family: "CalmExtra";
`;

export { LoaderWrapper, Svg, Path };
