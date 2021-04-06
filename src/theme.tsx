import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  fonts: {
    heading: "Nanum Myeongjo",
    body: "Mulish",
  },
  breakpoints,
  components: {
    Button: {
      baseStyle: {
        // fontWeight: "bold",
        borderRadius: "16px",
      },
    },
  },
});

export default theme;