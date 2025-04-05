import styled from "styled-components";

const StyledMapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export { StyledMapContainer };
