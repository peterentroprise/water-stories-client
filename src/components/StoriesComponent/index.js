import { StoryCard } from "./StoryCard";
import { StoryContainer } from "./StoryContainer";
import { StoryLayout } from "./StoryLayout";
import { GlassBackdrop } from "./GlassBackdrop";

const StoriesComponent = () => (
  <StoryLayout>
    <GlassBackdrop />
    <StoryContainer>
      <StoryCard />
    </StoryContainer>
  </StoryLayout>
);

export default StoriesComponent;
