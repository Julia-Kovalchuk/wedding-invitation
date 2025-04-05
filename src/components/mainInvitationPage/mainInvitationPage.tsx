import React from "react";
import { useWedding } from "../../context/context";

import {
  DateBlock,
  DateText,
  InfoBlock,
  InvitationText,
  Name,
  NamesBlock,
  StyledMainInvitationPage,
  TextSeparator,
} from "./styles";
import { formateDate } from "../../utils/formateDate";
import { CountdownTimer } from "../index";

export const MainInvitationPage = () => {
  const { groom, bride, weddingDate } = useWedding();
  const formattedDate = formateDate(weddingDate);
  return (
    <StyledMainInvitationPage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <InfoBlock
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <InvitationText>Приглашаем на нашу свадьбу</InvitationText>
        <NamesBlock>
          <Name>{groom}</Name>
          <Name>{bride}</Name>
        </NamesBlock>
        <DateBlock>
          {/* <DateText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Ждем Вас
          </DateText> */}
          <DateText>{formattedDate}</DateText>
          <TextSeparator />
        </DateBlock>
      </InfoBlock>
      <CountdownTimer weddingDate={weddingDate} />
    </StyledMainInvitationPage>
  );
};
