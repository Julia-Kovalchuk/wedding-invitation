import { useWedding } from "context/context";
import React from "react";
import {
  CalendarWrapper,
  DayCell,
  DaysGrid,
  HeartSVG,
  MonthTitle,
} from "./styles";

export const Calendar = () => {
  const { weddingDate } = useWedding();

  const augustDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const monthName = new Date(weddingDate).toLocaleString("ru-RU", {
    month: "long",
  });
  const year = new Date(weddingDate).toLocaleString("ru-RU", {
    year: "numeric",
  });

  return (
    <CalendarWrapper>
      <MonthTitle>
        {monthName} {year}
      </MonthTitle>

      <DaysGrid>
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

        {augustDays.map((day) => (
          <DayCell key={day} isHeart={day === 1}>
            {day}
            {day === 1 && (
              <HeartSVG viewBox="0 0 100 100">
                <path
                  d="M50,30 C20,-10 -20,40 50,90 C120,40 80,-10 50,30"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </HeartSVG>
            )}
          </DayCell>
        ))}
      </DaysGrid>
    </CalendarWrapper>
  );
};
