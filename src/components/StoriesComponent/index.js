import React from "react";
import ReactDOM from "react-dom";
import ScrollSnap from "scroll-snap";
import { motion } from "framer-motion";
import { Box, forwardRef } from "@chakra-ui/react";

import { StoryCard } from "./StoryCard";
import { StoryContainer } from "./StoryContainer";
import { StoryLayout } from "./StoryLayout";
import Link from "../LinkComponent";

import data from "./data";

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

function callback() {
  console.log("snapped");
}

const MotionBox = motion(Box);

class StoriesComponent extends React.Component {
  container = React.createRef();

  bindScrollSnap() {
    const element = this.container.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: "90%",
    });

    snapElement.bind(callback);
  }

  componentDidMount() {
    this.bindScrollSnap();
  }

  render() {
    return (
      <StoryLayout>
        {console.log(data)}

        <div
          ref={this.container}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            overflow: "auto",
            top: 0,
            padding: 16,
            left: 0,
            width: "100%",
            height: "100vh",
          }}
        >
          <motion.div
            className="thumbnails"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
          >
            {data.stories.map((story) => (
              <motion.div className="thumbnail" variants={thumbnailVariants}>
                <motion.div
                  className="frame"
                  whileHover="hover"
                  variants={frameVariants}
                  transition={transition}
                >
                  <>
                    <StoryContainer key={story.id}>
                      <StoryCard story={story}>
                        <motion.img
                          src={story.video}
                          width="100px"
                          alt="The Barbican"
                          variants={imageVariants}
                          transition={transition}
                        />
                      </StoryCard>
                    </StoryContainer>
                  </>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </StoryLayout>
    );
  }
}

export default StoriesComponent;
