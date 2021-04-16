import * as React from "react";
import {
  Box,
  Flex,
  useColorMode,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { MainMenuButton } from "./MainMenuButton";
import { MainNavBreadcrumbs } from "./MainNavBreadcrumbs";
import { MainSearchInput } from "./MainSearchInput";
import { useMobileMenuState } from "./useMobileMenuState";

type MainProps = {};

export const Main: React.FC<MainProps> = ({ children }) => {
  const { isOpen, toggle } = useMobileMenuState();
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "rgba( 255, 255, 255, .5 )",
    dark: "rgba( 0, 0, 0, .25 )",
  };

  const color = { light: "black", dark: "white" };

  return (
    <Box
      flex="1"
      px={{ md: "1rem" }}
      pb={{ md: "1rem" }}
      marginTop={{ md: "4rem" }}
      marginStart={{ md: "var(--sidebar-width)" }}
      marginEnd={{ xl: "var(--sidebar-width)" }}
      position="relative"
      left={isOpen ? "var(--sidebar-width)" : "0"}
      transition="left 0.2s"
    >
      <Box
        height="100%"
        overflow="hidden"
        rounded={{ md: "2xl" }}
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        sx={{
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 4px )",
          WebkitBackdropFilter: "blur( 4px )",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
        <Flex direction="column" height="full">
          <Flex
            w="full"
            py="1rem"
            justify="space-between"
            align="center"
            px="1rem"
          >
            <Flex align="center" minH=".5rem">
              <MainMenuButton onClick={toggle} isOpen={isOpen} />
              <MainNavBreadcrumbs />
            </Flex>
            <MainSearchInput />
          </Flex>
          <Flex
            direction="column"
            flex="1"
            px="1rem"
            overflowY="auto"
            sx={{
              "&::-webkit-scrollbar-track": {
                bg: "transparent",
              },
              "&::-webkit-scrollbar": {
                width: ".25rem",
              },
              "&::-webkit-scrollbar-thumb": {
                bg: mode("blue.500", "gray.700"),
                borderRadius: "xl",
              },
            }}
          >
            <Box flex="1">{children}</Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
