import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text>Merging the finite with the infinite.</Text>
      <List spacing={3} my={0}>
        <ListItem>
          <ChakraLink
            isExternal
            href="https://waterstories.app"
            flexGrow={1}
            mr={2}
          >
            Water Stories
            <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ChakraLink
            isExternal
            href="https://water-stories.circle.so/"
            flexGrow={1}
            mr={2}
          >
            Community
            <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ChakraLink
            isExternal
            href="https://www.elementalecosystems.com/"
            flexGrow={1}
            mr={2}
          >
            Elemental Ecosystems
            <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Entrprise © 2021</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;
