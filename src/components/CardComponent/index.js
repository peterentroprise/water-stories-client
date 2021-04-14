import { Flex, useColorMode } from "@chakra-ui/react";

const CardComponent = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "rgba( 255, 255, 255, 0.7 )",
    dark: "rgba( 0, 0, 0, 0.25 )",
  };

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      sx={{
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: "blur( 4px )",
        // border: "1px solid rgba( 255, 255, 255, 0.18 )",
        borderRadius: "xl",
      }}
      width="full"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      {children}
    </Flex>
  );
};

export default CardComponent;
