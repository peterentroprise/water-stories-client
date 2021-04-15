import * as React from "react";
import { Flex, useColorModeValue as mode } from "@chakra-ui/react";

import { Sidebar } from "./Sidebar";
import { Main } from "./Main";

type LayoutAppProps = {};

const LayoutApp: React.FC<LayoutAppProps> = ({ children }) => {
  return (
    <Flex
      height="100vh"
      bgGradient={mode(
        "linear(to-tr, teal.200, blue.500)",
        "linear(to-tr, teal.200, blue.500)"
      )}
      overflow="hidden"
      sx={{ "--sidebar-width": "256px" }}
    >
      <Sidebar />
      <Main>{children}</Main>
    </Flex>
  );
};

export default LayoutApp;
