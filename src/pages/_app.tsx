import "@fontsource/nanum-myeongjo/800.css";
import "@fontsource/mulish/400.css";
import { ChakraProvider } from "@chakra-ui/react";

import "../components/MapComponent/node-styles.css";
import theme from "../theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
