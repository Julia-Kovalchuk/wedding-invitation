/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { StyledGreetingBlock, Time } from "./styles";
import { InfoText, Title } from "ui/typography";
import { Calendar } from "../index";

export const GreetingBlock = () => {
  return (
    <StyledGreetingBlock>
      <Title>Дорогой гость!</Title>
      <InfoText>
        Мы рады пригласить вас на самый важный день в нашей жизни – нашу
        свадьбу!
      </InfoText>
      <Calendar />

      <InfoText>Ждем вас, чтобы разделить этот счастливый момент!</InfoText>
    </StyledGreetingBlock>
  );
};
