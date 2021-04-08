import { Link as ChakraLink, Button } from "@chakra-ui/react";

import { Container } from "./Container";

export const BottomNavigation = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={4}
  >
    <ChakraLink isExternal href="/" flexGrow={1} ml={4} mr={2}>
      <Button width="100%" variant="solid" colorScheme="gray">
        Create Account
      </Button>
    </ChakraLink>

    <ChakraLink isExternal href="/" flexGrow={3} ml={2} mr={4}>
      <Button width="100%" variant="solid" colorScheme="purple">
        Sign In
      </Button>
    </ChakraLink>
  </Container>
);
