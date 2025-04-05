/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { StyledContacts } from "./styles";
import { SmallInfoText, Title } from "ui/typography";
import { Button } from "../index";

export const Contacts = () => {
  const onOpenTelegram = () => {
    window.open("https://t.me/+SIRztCx3FwpiMzky", "_blank");
  };

  return (
    <StyledContacts>
      <Title>Будем рады увидеться с вами</Title>
      <SmallInfoText>
        Вступай в наш общий телеграмм-канал. Там мы будем делиться
        впечатлениями, эмоциями, видео и фото
      </SmallInfoText>
      <Button onClick={onOpenTelegram} disabled={false} styleType="default">
        Перейти в Telegram
      </Button>
    </StyledContacts>
  );
};
