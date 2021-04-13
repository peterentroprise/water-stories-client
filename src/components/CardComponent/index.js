import { Flex, useColorMode } from "@chakra-ui/react";

const CardComponent = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "rgba( 255, 255, 255, 0.5 )",
    dark: "rgba( 0, 0, 0, 0.25 )",
  };

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      // height="calc(90vh - 17px)"
      mb="1rem"
      sx={{
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: "blur( 4px )",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        borderRadius: "1rem",
      }}
      maxW="container.sm"
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};

export default CardComponent;
