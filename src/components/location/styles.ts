import styled from "styled-components";
import { ContainerFlexColumn, ContainerFlexColumnCenter } from "ui/containers";
import { SmallInfoText } from "ui/typography";

const StyledLocation = styled(ContainerFlexColumnCenter)`
  gap: 25px;
`;

const Place = styled(ContainerFlexColumnCenter)`
  gap: 10px;
`;

const InfoText = styled(SmallInfoText)`
  text-align: center;
`;

const IconWrapper = styled.img<{ alignRight: boolean }>`
  width: 30px;
  height: 30px;
`;

export { StyledLocation, Place, InfoText, IconWrapper };
