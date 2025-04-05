/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Amount, StyledCountdownContainer, TimerItem, Text } from "./styles";

export const CountdownTimer = ({ weddingDate }: { weddingDate: string }) => {
  const calculateTimeLeft = () => {
    const targetDate = new Date(weddingDate).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const getPlural = (value: number, singular: string, plural: string) => {
    return value === 1 ? singular : plural;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const fadeAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <StyledCountdownContainer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {Object.entries(timeLeft).map(([label, value]) => (
        <TimerItem key={label}>
          <Amount key={value} {...fadeAnimation}>
            {value}
          </Amount>
          <Text>{getPlural(value, label.slice(0, -1), label)}</Text>
        </TimerItem>
      ))}
    </StyledCountdownContainer>
  );
};
