import * as React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

import StoryComponent from "../../components/StoryComponent";
import data from "../../components/StoriesComponent/data.json";

const MotionBox = motion(Box);

const Story = ({ id, story }) => {
  return (
    <MotionBox initial="exit" animate="enter" exit="exit">
      <StoryComponent id={id} story={story} />
    </MotionBox>
  );
};

export async function getStaticProps({ params }) {
  const id = Number.parseInt(params.id, 10);
  const story = data.stories[id];

  return {
    props: {
      id: id,
      story: story,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: data.stories.map((story) => {
      return {
        params: {
          id: story.id,
        },
      };
    }),
    fallback: false,
  };
}

export default Story;
