import React, { createContext, useContext } from "react";
import buffetImage from "../assets/images/buffet.png";
import danceImage from "../assets/images/dance.png";
import dinnerImage from "../assets/images/dinner.png";
import ringsImage from "../assets/images/rings.png";

type WeddingDataType = {
  groom: "Влад";
  bride: "Юля";
  weddingDate: string;
  confirmationDate: string;
  timing: TimingType;
  location: LocationType;
};

type EventType = {
  name: string;
  time: string;
  side: "left" | "right";
  icon: string;
};

type TimingType = {
  weddingTime: string;
  events: EventType[];
};

type LocationType = {
  name: string;
  adress: string;
};

const Context = createContext<WeddingDataType | null>(null);

export const Provider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const weddingData: WeddingDataType = {
    groom: "Влад",
    bride: "Юля",
    weddingDate: "2025-08-01T16:00:00+03:00",
    confirmationDate: "2025-07-01T16:00:00+03:00",
    timing: {
      weddingTime: "16:00",
      events: [
        {
          name: "Фуршет",
          time: "16:00",
          side: "left",
          icon: buffetImage,
        },
        {
          name: "Торжественная церемония",
          time: "16:30",
          side: "right",
          icon: ringsImage,
        },
        {
          name: "Праздничный банкет",
          time: "17:20",
          side: "left",
          icon: dinnerImage,
        },
        {
          name: "Танцы, конкурсы и веселье",
          time: "All day, all night",
          side: "right",
          icon: danceImage,
        },
      ],
    },
    location: {
      name: 'усадьба "Бублики"',
      adress: `Гродненская область, Ивьевский район,\nд. Шелути, д. 9`,
    },
  };

  return <Context.Provider value={weddingData}>{children}</Context.Provider>;
};

export const useWedding = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useWedding must be used within a WeddingProvider");
  }
  return context;
};
