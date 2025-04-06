import { motion } from "framer-motion";
import styled from "styled-components";
import { ContainerFlexColumnCenter } from "ui/containers";

const StyledCountdownContainer = styled(motion.div)`
  display: flex;
  gap: 20px;
  font-weight: bold;
  justify-content: center;
  margin-top: 30px;
`;

const TimerItem = styled(ContainerFlexColumnCenter)`
  gap: 20px;
  width: 60px;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
`;

const Amount = styled(motion.span)`
  font-family: "Scriptorama";
  font-size: 30px;
`;

const Text = styled.div`
  font-family: "Tahoma";
`;

export { StyledCountdownContainer, TimerItem, Amount, Text };
