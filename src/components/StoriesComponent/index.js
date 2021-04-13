import { StoryCard } from "./StoryCard";
import { StoryContainer } from "./StoryContainer";
import { StoryLayout } from "./StoryLayout";

const StoriesComponent = () => (
  <StoryLayout>
    <StoryContainer>
      <StoryCard />
    </StoryContainer>
  </StoryLayout>
);

export default StoriesComponent;
