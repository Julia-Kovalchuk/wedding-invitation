import { motion } from "framer-motion";
import styled from "styled-components";

const AnimatedSection = styled(motion.div)`
  margin-bottom: 50px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

export {AnimatedSection}