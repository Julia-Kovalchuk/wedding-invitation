/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { StyledMapContainer } from "./styles";

export const MapContainer = () => {
  const mapUrl =
    "https://www.google.com/maps?q=53.994271,25.648967&z=15&output=embed&disableDefaultUI=true&markers=false&zoom=55&language=en";

  const openMap = () => {
    window.open("https://www.google.com/maps?q=53.994271,25.648967", "_blank");
  };
  // todo delete

  return (
    <StyledMapContainer onClick={openMap}>
      <iframe src={mapUrl} loading="lazy"></iframe>
    </StyledMapContainer>
  );
};
