import { Text, Tag, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Link from "../LinkComponent";

const MotionBox = motion(Box);

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

const StoryComponent = ({ id, story }) => {
  return (
    <>
      <MotionBox initial="exit" animate="enter" exit="exit">
        <MotionBox p="1rem" variants={imageVariants}>
          <Image borderRadius="1rem" src={story.video} alt="Moat" />
        </MotionBox>
        <MotionBox p="1rem" variants={backVariants}>
          <>
            <Text>{story.title}</Text>
            <Text>{id}</Text>
            <Text>{story.description}</Text>
            <Tag>{story.tag}</Tag>
            <Link
              href="/stories"
              mt={1}
              display="block"
              fontSize="lg"
              lineHeight="normal"
              fontWeight="semibold"
            >
              Back To Stories
            </Link>
          </>
        </MotionBox>
      </MotionBox>
    </>
  );
};

export default StoryComponent;
