/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { IconWrapper, Place, StyledLocation } from "./styles";
import { InfoText, Title } from "ui/typography";
import { useWedding } from "context/context";
import { Button } from "../index";
import locationImage from "../../assets/images/location.png";

export const Location = () => {
  const { location } = useWedding();
  const onOpenMap = () => {
    window.open("https://www.google.com/maps?q=53.994047,25.649508", "_blank");
  };

  return (
    <StyledLocation>
      <Title>Локация</Title>
      <Place>
        <InfoText>{location.name}</InfoText>
        <IconWrapper src={locationImage} alt={"location"} />
        <InfoText>{location.adress}</InfoText>
      </Place>
      <Button onClick={onOpenMap} disabled={false} styleType="outline">
        Посмотреть на карте
      </Button>
    </StyledLocation>
  );
};
