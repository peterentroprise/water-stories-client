import React from "react";
import ReactDOM from "react-dom";
import ScrollSnap from "scroll-snap";
import { Box, forwardRef } from "@chakra-ui/react";

import { StoryCard } from "./StoryCard";
import CardComponent from "../CardComponent";
import LayoutComponent from "../LayoutComponent";
import Link from "../LinkComponent";

import data from "./data";

function callback() {
  console.log("snapped");
}

const StoriesComponent = () => {
  return (
    <LayoutComponent>
      {data.stories.map((story) => (
        <CardComponent key={story.id}>
          <StoryCard story={story} />
        </CardComponent>
      ))}
    </LayoutComponent>
  );
};

export default StoriesComponent;
