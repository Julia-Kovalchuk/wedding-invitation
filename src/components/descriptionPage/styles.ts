import styled from "styled-components";
import descriptionBackground from "../../assets/images/descriptionBackground.png";
import { ContainerFlexColumnCenter } from "ui/containers";
import { motion } from "framer-motion";
import { Media } from "ui/media";

const StyledDescriptionPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  padding: 40px;
  background: url(${descriptionBackground});
  background-size: contain;
  background-position: center;

  ${Media.SMW} {
    margin-top: 50px;
    padding: 100px;
  }

  ${Media.MDW} {
    padding-inline: 200px;
  }
`;

const InfoBlock = styled(ContainerFlexColumnCenter)`
  gap: 20px;
  padding: 10px;
  background: ${(props) => props.theme.colors.background_shadow};

  ${Media.SMW} {
    width: 100%;
    padding: 50px;
  }
`;

const AnimatedSection = styled(motion.div)`
  margin-bottom: 20px;

  ${Media.SMW} {
    max-width: 400px;
  }
`;

const fadeInSection = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInWrapper = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 3 },
  viewport: { once: false },
};

export {
  StyledDescriptionPage,
  InfoBlock,
  AnimatedSection,
  fadeInSection,
  fadeInWrapper,
};
