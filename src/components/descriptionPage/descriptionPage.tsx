import React from "react";
import {
  AnimatedSection,
  fadeInSection,
  fadeInWrapper,
  InfoBlock,
  StyledDescriptionPage,
} from "./styles";
import { Contacts, GreetingBlock, Location, Timing, Wishes } from "..";

export const DescriptionPage = () => {
  const sections = [
    { id: 1, component: <GreetingBlock /> },
    { id: 2, component: <Location /> },
    { id: 3, component: <Timing /> },
    { id: 4, component: <Wishes /> },
    { id: 5, component: <Contacts /> },
  ];

  return (
    <StyledDescriptionPage
      initial="hidden"
      whileInView="visible"
      variants={fadeInWrapper}
      viewport={{ amount: 0.2 }}
    >
      <InfoBlock>
        {sections.map(({ id, component }) => (
          <AnimatedSection
            key={id}
            initial="hidden"
            whileInView="visible"
            variants={fadeInSection}
            viewport={{ amount: 0.2 }}
          >
            {component}
          </AnimatedSection>
        ))}
      </InfoBlock>
    </StyledDescriptionPage>
  );
};
