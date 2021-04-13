import { Flex } from "@chakra-ui/react";
import { DarkModeSwitch } from "../DarkModeSwitch";
const LayoutComponent = (props) => {
  return (
    <>
      <Flex
        p="1rem"
        pt="5rem"
        w="100%"
        h="100vh"
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        bgGradient="linear(to-tr, teal.200, blue.500)"
        // bgImage="url('https://uploads-ssl.webflow.com/5e2f7d4ac8eec2386bad1415/5e5c2eb163723e27a2ab4a09_WaterCourse.jpg')"
        {...props}
      />
      <DarkModeSwitch />
    </>
  );
};

export default LayoutComponent;
