import { Box, Center, Container, AspectRatio } from "@chakra-ui/react";

export const CoreGrid = () => (
  <Box
    h="100vh"
    backgroundImage={`url("https://static.seekingalpha.com/uploads/2020/6/8/saupload_getty_483601959_2000132420009280395_142366.jpg")`}
  >
    <Container h="100vh" p="0px" bg="blue" opacity="70%" maxW="container.sm">
      <Center bg="tomato" w="100%">
        This is the strechy
      </Center>
      <AspectRatio m="4rem" ratio={1.618}>
        <Box h="100%" w="100%" bg="yellow" display="block">
          <AspectRatio maxH="100%" ratio={1}>
            <Box h="100%" w="100%" bg="green"></Box>
          </AspectRatio>
        </Box>
      </AspectRatio>
    </Container>
  </Box>
);

{
  /* <Box
h="100vh"
backgroundImage={`url("https://static.seekingalpha.com/uploads/2020/6/8/saupload_getty_483601959_2000132420009280395_142366.jpg")`}
>
<Container h="100vh" p="0px" bg="blue" opacity="70%" maxW="container.sm">
  <Center bg="tomato" w="100%">
    This is the strechy
  </Center>
  <AspectRatio m="4rem" ratio={1.618}>
    <Box h="100%" w="100%" bg="yellow">
      <Box h="100%" w="64px" bg="green">
        asd
      </Box>
      <Box h="100%" w="200px" bg="red">
        asd
      </Box>
    </Box>
  </AspectRatio>
</Container>
</Box> */
}
