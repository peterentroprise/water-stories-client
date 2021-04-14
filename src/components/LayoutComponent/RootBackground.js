import { Box } from "@chakra-ui/react";

const RootBackGround = ({ children }) => {
  return (
    <>
      <Box
        w="100%"
        minH="100vh"
        bgGradient="linear(to-tr, teal.200, blue.500)"
        // bgImage="url('https://uploads-ssl.webflow.com/5e2f7d4ac8eec2386bad1415/5e5c2eb163723e27a2ab4a09_WaterCourse.jpg')"
      >
        {children}
      </Box>
    </>
  );
};

export default RootBackGround;
