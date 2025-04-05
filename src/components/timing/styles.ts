import styled from "styled-components";
import { ContainerFlexColumnCenter } from "ui/containers";

const StyledTiming = styled(ContainerFlexColumnCenter)`
  gap: 20px;
`;

const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 290px;
  padding-top: 20px;
`;

const Column = styled.div<{ alignRight: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => (props.alignRight ? "flex-start" : "flex-end")};
  height: 100%;
  text-align: ${(props) => (props.alignRight ? "left" : "right")};
  padding-top: ${(props) => (props.alignRight ? "55px" : "0")};
  padding-bottom: ${(props) => (props.alignRight ? "0" : "85px")};
`;

const IconWrapper = styled.img<{ alignRight: boolean }>`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.alignRight ? "0%" : "100%")};
  transform: translate(-50%, -50%);
  width: 34px;
  height: 34px;
`;

const Event = styled.div<{ alignRight: boolean; place: number }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.alignRight ? "flex-start" : "flex-end")};
  padding: ${(props) => (props.alignRight ? "0 0 0 30px" : "0 30px 0 0")};
`;

const Time = styled.span`
  padding-bottom: 5px;
  font-weight: bold;
  font-size: 18px;
`;

const Name = styled.span`
  font-size: 16px;
`;

export {
  StyledTiming,
  TimelineContainer,
  Column,
  Event,
  Time,
  Name,
  IconWrapper,
};
