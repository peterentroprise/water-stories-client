import * as React from "react";
import StoryComponent from "../../components/StoryComponent";
import data from "../../components/StoriesComponent/data.json";

const Page = ({ id, story }) => {
  return <StoryComponent id={id} story={story} />;
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

export default Page;
