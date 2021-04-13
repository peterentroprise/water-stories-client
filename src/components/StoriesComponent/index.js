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
      <MotionBox
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        <StoryLayout>
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
            {data.stories.map((story) => (
              <StoryContainer key={story.id}>
                <StoryCard story={story} />
              </StoryContainer>
            ))}
          </div>
        </StoryLayout>
      </MotionBox>
    );
  }
}

export default StoriesComponent;
