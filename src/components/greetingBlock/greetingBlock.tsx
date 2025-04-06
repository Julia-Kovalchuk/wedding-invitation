/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { StyledGreetingBlock, Time } from "./styles";
import { InfoText, Title } from "ui/typography";
import { Calendar } from "../index";
import { getGreeting } from "utils/formatGreeting";

export const GreetingBlock = () => {
  const params = new URLSearchParams(window.location.search);
  const guestName = params.get("to");
  const gender = params.get("gender");
  const greetingText = getGreeting(gender);

  const isPlural = gender === "plural";

  return (
    <StyledGreetingBlock>
      <Title>
        {greetingText}{" "}
        {isPlural ? (
          <>
            <br />
            <span>{guestName}</span>
          </>
        ) : (
          guestName
        )}
        !
      </Title>
      <InfoText>
        Мы рады пригласить вас на самый важный день в нашей жизни – нашу
        свадьбу!
      </InfoText>
      <Calendar />

      <InfoText>Ждем вас, чтобы разделить этот счастливый момент!</InfoText>
    </StyledGreetingBlock>
  );
};
