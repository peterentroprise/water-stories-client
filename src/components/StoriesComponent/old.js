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

class StoriesComponent extends React.Component {
  // container = React.createRef();

  // bindScrollSnap() {
  //   const element = this.container.current;
  //   const snapElement = new ScrollSnap(element, {
  //     snapDestinationY: "90%",
  //   });

  //   snapElement.bind(callback);
  // }

  // componentDidMount() {
  //   this.bindScrollSnap();
  // }

  render() {
    return (
      <LayoutComponent>
        {/* <div
          ref={this.container}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "auto",
            position: "absolute",
            top: 0,
            // left: 0,
            paddingTop: "5rem",
            paddingLeft: " 1rem",
            paddingRight: " 1rem",

            width: "100%",
            height: "100vh",
          }}
        > */}
        {data.stories.map((story) => (
          <CardComponent key={story.id}>
            <StoryCard story={story} />
          </CardComponent>
        ))}
        {/* </div> */}
      </LayoutComponent>
    );
  }
}

export default StoriesComponent;
