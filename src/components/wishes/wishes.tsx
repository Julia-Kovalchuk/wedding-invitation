/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { StyledWishes, TextSeparator } from "./styles";
import { SmallInfoText, Title } from "ui/typography";
import { useWedding } from "context/context";
import { formateDate } from "utils/formateDate";

export const Wishes = () => {
  const { confirmationDate } = useWedding();
  const formattedDate = formateDate(confirmationDate);

  return (
    <StyledWishes>
      <Title>Детали</Title>
      <SmallInfoText>
        Мы будем благодарны, если вместо цветов вы порадуете нас бутылочкой
        вашего любимого алкогольного напитка – ей точно найдется место в нашей
        семейной коллекции!
      </SmallInfoText>
      <TextSeparator />
      <SmallInfoText>
        Просим подтвердить свое присутствие до {formattedDate}
      </SmallInfoText>
    </StyledWishes>
  );
};
