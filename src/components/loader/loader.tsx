import React from "react";
import { LoaderWrapper, Path, Svg } from "./styles";

export const Loader = () => (
  <LoaderWrapper>
    <Svg viewBox="0 0 100 100">
      <Path d="M50,30 C20,-10 -20,40 50,90 C120,40 80,-10 50,30" />
    </Svg>
  </LoaderWrapper>
);
