import styled from "styled-components";
import { ContainerFlexColumnCenter } from "ui/containers";
import textSeparator from "../../assets/images/textSeparator.png";

const StyledWishes = styled(ContainerFlexColumnCenter)`
  gap: 15px;
`;

const TextSeparator = styled.div`
  width: 100%;
  height: 40px;
  background: url(${textSeparator});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export { StyledWishes, TextSeparator };
