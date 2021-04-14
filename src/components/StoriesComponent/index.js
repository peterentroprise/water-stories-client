import React from "react";
import ReactDOM from "react-dom";

import { StoryContent } from "./StoryContent";
import CardComponent from "../CardComponent";
import LayoutComponent from "../LayoutComponent";
import StoryStack from "./StoryStack";

import data from "./data";

const StoriesComponent = () => {
  return (
    <LayoutComponent>
      <StoryStack>
        {data.stories.map((story) => (
          <CardComponent key={story.id}>
            <StoryContent story={story} />
          </CardComponent>
        ))}
      </StoryStack>
    </LayoutComponent>
  );
};

export default StoriesComponent;
