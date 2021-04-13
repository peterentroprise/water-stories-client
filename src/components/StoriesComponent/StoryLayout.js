import { Flex } from "@chakra-ui/react";

export const StoryLayout = (props) => {
  return (
    <Flex
      pt="3rem"
      w="100%"
      h="100vh"
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bgGradient="linear(to-tr, teal.200, blue.500)"
      {...props}
    />
  );
};
