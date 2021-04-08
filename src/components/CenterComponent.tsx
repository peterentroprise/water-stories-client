import {
  Grid,
  GridItem,
  Box,
  Flex,
  Center,
  Text,
  Container,
} from "@chakra-ui/react";

export const CenterComponent = () => (
  <Box
    h="100vh"
    w="100%"
    backgroundPosition="center"
    backgroundImage={`url("https://static.seekingalpha.com/uploads/2020/6/8/saupload_getty_483601959_2000132420009280395_142366.jpg")`}
  >
    <Container h="100vh" p="0px" bg="none" maxW="container.xl">
      <Center bg="white" w="100%" h="4rem">
        <Text>Stretchy Aspect Ratio Thing</Text>
      </Center>
      <Flex
        flexDirection="column"
        justifyContent="center"
        height="calc(100% - 4rem)"
      >
        <Grid
          ml="4rem"
          mr="4rem"
          gridTemplateColumns="1fr 1rem 1.618fr"
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
          <GridItem
            bg="white"
            borderRadius=".125rem 1rem .125rem .125rem"
            // minWidth="375px"
            // height="100%"
            sx={{ "--aspect-ratio": "1 / 1.618" }}
          ></GridItem>
          <GridItem bg="none" height="100%"></GridItem>
          <GridItem
            borderRadius=" 1rem .125rem .125rem .125rem"
            bg="white"
            // minHeight="100%"
            sx={{ "--aspect-ratio": "1 / 1" }}
          ></GridItem>
        </Grid>
      </Flex>
    </Container>
  </Box>
);
