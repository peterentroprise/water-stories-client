import React from "react";
import ReactDOM from "react-dom";
import ScrollSnap from "scroll-snap";

import { StoryCard } from "./StoryCard";
import { StoryContainer } from "./StoryContainer";
import { StoryLayout } from "./StoryLayout";

function callback() {
  console.log("snapped");
}

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
          <StoryContainer>
            <StoryCard />
          </StoryContainer>

          <StoryContainer>
            <StoryCard />
          </StoryContainer>
          <StoryContainer>
            <StoryCard />
          </StoryContainer>
          <StoryContainer>
            <StoryCard />
          </StoryContainer>
          <StoryContainer>
            <StoryCard />
          </StoryContainer>
        </div>
      </StoryLayout>
    );
  }
}

export default StoriesComponent;
