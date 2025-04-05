import styled from "styled-components";
import { ContainerFlexColumnCenter } from "ui/containers";

const StyledGreetingBlock = styled(ContainerFlexColumnCenter)`
  gap: 25px;
`;

const Time = styled.div`
  font-size: 25px;
  line-height: 130%;
`;

export { StyledGreetingBlock, Time };
