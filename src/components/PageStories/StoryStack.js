import { VStack } from "@chakra-ui/react";

const StoryStack = ({ children }) => {
  return (
    <VStack py="1.5rem" spacing="1rem" align="stretch">
      {children}
    </VStack>
  );
};

export default StoryStack;
