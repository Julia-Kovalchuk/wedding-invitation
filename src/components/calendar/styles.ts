import styled, { keyframes } from "styled-components";
import {
  ContainerFlexColumnCenter,
  ContainerFlexRowCenter,
} from "ui/containers";

const drawHeart = keyframes`
  0% {
    stroke-dashoffset: 400;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const CalendarWrapper = styled(ContainerFlexColumnCenter)`
  margin: auto;
  text-align: center;
`;

const DayCell = styled.div<{ isHeart?: boolean }>`
  position: relative;
  padding: 6px;
  color: ${(props) =>
    props.isHeart ? props.theme.colors.danger : props.theme.colors.text};
  font-size: 18px;
  text-align: center;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

const HeartSVG = styled.svg`
  position: absolute;
  width: 36px;
  height: 36px;
  bottom: -2px;
  right: -3px;
  stroke: ${(props) => props.theme.colors.danger};
  fill: transparent;
  stroke-width: 4;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: ${drawHeart} 3s ease-in-out 0.5s infinite;
`;

const MonthTitle = styled(ContainerFlexRowCenter)`
  font-size: 20px;
  margin-bottom: 12px;
  text-transform: capitalize;
`;

export { CalendarWrapper, DayCell, DaysGrid, HeartSVG, MonthTitle };
