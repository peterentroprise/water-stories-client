import {
  Box,
  Center,
  Flex,
  Text,
  Container,
  AspectRatio,
} from "@chakra-ui/react";

export const CenterComponent = () => (
  <Box
    h="100vh"
    w="100%"
    backgroundPosition="center"
    backgroundImage={`url("https://static.seekingalpha.com/uploads/2020/6/8/saupload_getty_483601959_2000132420009280395_142366.jpg")`}
  >
    <Container
      h="100vh"
      p="0px"
      bg="gray"
      maxW="container.sm"
      pl="4rem"
      pr="4rem"
    >
      <Center bg="yellow" w="100%" mb="4rem">
        Stretchy Aspect Ratio Thing
      </Center>
      <Box
        className="grid"
        bg="yellow"
        display="grid"
        gridTemplateColumns="1fr 1.618fr"
        placeItems="start"
        sx={{
          "*": {
            width: "100%",
          },
          "*::before": {
            content: '""',
            display: "inline-block",
            width: "1px",
            height: 0,
            paddingBottom: "calc(100% / (var(--aspect-ratio)))",
          },
        }}
      >
        <Box
          sx={{
            "--aspect-ratio": "1 / 1.618",
            backgroundColor: "red",
            // width: "200px",
            height: "100%",
          }}
        >
          1 / 1.618
        </Box>
        <Box sx={{ "--aspect-ratio": "1 / 1", backgroundColor: "blue" }}>
          1 / 1
        </Box>
      </Box>
      {/* </AspectRatio> */}
    </Container>
  </Box>
);
