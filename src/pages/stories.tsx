import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

import StoriesComponent from "../components/StoriesComponent";

const Stories = () => {
  const MotionBox = motion(Box);

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const pageVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: { ...transition, duration: 1.5 },
    },
  };

  return (
    <MotionBox variants={pageVariants}>
      <StoriesComponent />
    </MotionBox>
  );
};

export default Stories;
