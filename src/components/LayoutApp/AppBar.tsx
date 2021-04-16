import * as React from "react";
import { Box, HStack, Heading } from "@chakra-ui/react";

type AppBarProps = {};

export const AppBar: React.FC<AppBarProps> = () => {
  return (
    <HStack
      display="flex"
      flex="1"
      top="0"
      left="0"
      paddingLeft="2rem"
      position="fixed"
      height="4rem"
      width="full"
      align="center"
    >
      <Box display={{ md: "block" }}>
        <Heading size="md" fontWeight="extrabold">
          Water Stories
        </Heading>
      </Box>
    </HStack>
  );
};
