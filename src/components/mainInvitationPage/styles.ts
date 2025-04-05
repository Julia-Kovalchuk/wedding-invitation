import styled from "styled-components";
import mainBackground from "../../assets/images/mainBackground.png";
import mainBackgroundDesktop from "../../assets/images/mainBackgroundDesktop.png";
import { motion } from "framer-motion";
import textSeparator from "../../assets/images/textSeparator.png";
import { Media } from "ui/media";

const StyledMainInvitationPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const InfoBlock = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
  width: 100%;
  padding-top: 10%;
  background: url(${mainBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${Media.SMW} {
    padding-top: 5%;
    background: url(${mainBackgroundDesktop});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const InvitationText = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: 0.5 },
}))`
  width: 150px;
  text-align: center;
  font-family: "CalmExtra";
  font-size: 20px;

  ${Media.SMH} {
    font-size: 16px;
  }

  ${Media.XSH} {
    width: 130px;
    font-size: 14px;
  }
`;

const NamesBlock = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1, delay: 0.7 },
}))`
  display: flex;
  flex-direction: column;
  width: 38%;
  padding-right: 15px;
  margin: 20px 0 80px;

  ${Media.SMH} {
    margin: 20px 0 70px;
  }

  ${Media.XSH} {
    margin: 20px 0 60px;
  }

  ${Media.SMW} {
    width: auto;
    justify-content: center;
    margin: 20px 0 90px;
  }
`;

const Name = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1, delay: 0.9 },
}))`
  font-family: "Scriptorama", sans-serif;
  font-size: 70px;
  line-height: 130%;

  &:first-child {
    align-self: flex-end;
  }

  ${Media.SMH} {
    font-size: 60px;
  }

  ${Media.XSH} {
    font-size: 55px;
  }
`;

const DateBlock = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1, delay: 1 },
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
  font-size: 20px;
  font-family: "CalmExtra";
`;

const DateText = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: 1.2 },
}))`
  font-size: 24px;

  ${Media.SMH} {
    font-size: 22px;
  }

  ${Media.SMH} {
    font-size: 20px;
  }
`;

const TextSeparator = styled.div`
  width: 100%;
  height: 45px;
  background: url(${textSeparator});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  ${Media.SMH} {
    height: 40px;
  }
`;

export {
  StyledMainInvitationPage,
  InfoBlock,
  Name,
  NamesBlock,
  DateBlock,
  InvitationText,
  DateText,
  TextSeparator,
};
