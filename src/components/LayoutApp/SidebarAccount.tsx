import * as React from "react";
import {
  Avatar,
  Box,
  HStack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

type SidebarAccountProps = {};

export const SidebarAccount: React.FC<SidebarAccountProps> = () => {
  return (
    <Box
      as="a"
      href="#"
      px="1rem"
      py=".5rem"
      display="block"
      transition="background 0.1s"
      rounded="md"
      cursor="pointer"
      _hover={{ color: "white", bg: mode("blue.600", "gray.600") }}
      whiteSpace="nowrap"
    >
      <HStack display="inline-flex">
        <Avatar size="sm" name="Peter Arnold" />
        <Box lineHeight="1">
          <Text fontWeight="semibold">Peter Arnold</Text>
          <Text fontSize="xs" mt=".2rem">
            peter@entroprise.com
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};
