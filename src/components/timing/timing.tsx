import React from "react";
import { useWedding } from "../../context/context";

import {
  Column,
  Name,
  StyledTiming,
  Time,
  TimelineContainer,
  Event,
  IconWrapper,
} from "./styles";
import { Title } from "ui/typography";

export const Timing = () => {
  const { timing } = useWedding();
  const { events } = timing;

  return (
    <StyledTiming>
      <Title>Программа</Title>
      <TimelineContainer>
        <Column alignRight={false}>
          {events
            .filter((event) => event.side === "left")
            .map((event, index) => (
              <Event key={index} alignRight={false} place={index + 1}>
                <Time>{event.time}</Time>
                <Name>{event.name}</Name>
                <IconWrapper
                  src={event.icon}
                  alt={event.name}
                  alignRight={false}
                />
              </Event>
            ))}
        </Column>

        <Column alignRight={true}>
          {events
            .filter((event) => event.side === "right")
            .map((event, index) => (
              <Event key={index} alignRight={true} place={index + 1}>
                <IconWrapper
                  src={event.icon}
                  alt={event.name}
                  alignRight={true}
                />
                <Time>{event.time}</Time>
                <Name>{event.name}</Name>
              </Event>
            ))}
        </Column>
      </TimelineContainer>
    </StyledTiming>
  );
};
