import { Box, Text, Image, Tag } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Link from "../LinkComponent";

const MotionBox = motion(Box);

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};

const frameVariants = {
  hover: { scale: 0.95 },
};

const imageVariants = {
  hover: { scale: 1.1 },
};

export const StoryCard = ({ story, children }) => {
  return (
    <MotionBox
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <MotionBox variants={thumbnailVariants}>
        <Box height="100%" p={4} display={{ md: "flex" }}>
          <MotionBox
            flexShrink={0}
            whileHover="hover"
            variants={frameVariants}
            transition={transition}
          >
            <MotionBox variants={imageVariants} transition={transition}>
              <Image
                borderRadius="1rem"
                width={{ md: 40 }}
                src={story.video}
                alt="Moat"
              />
            </MotionBox>

            {children}
          </MotionBox>

          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Link
              mt={1}
              display="block"
              fontSize="lg"
              lineHeight="normal"
              fontWeight="semibold"
              href={`/story/${story.id}`}
            >
              {story.title}
            </Link>
            <Text mt={2}>{story.description}</Text>
            <Tag>{story.tag}</Tag>
          </Box>
        </Box>
      </MotionBox>
    </MotionBox>
  );
};
