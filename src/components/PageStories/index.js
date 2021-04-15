import React from "react";
import ReactDOM from "react-dom";

import { StoryContent } from "./StoryContent";
import CardComponent from "../CardComponent";
import StoryStack from "./StoryStack";

import data from "../../data/stories.json";

const PageStories = () => {
  return (
    <StoryStack>
      {data.stories.map((story) => (
        <CardComponent key={story.id}>
          <StoryContent story={story} />
        </CardComponent>
      ))}
    </StoryStack>
  );
};

export default PageStories;
