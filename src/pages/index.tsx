import { Link as ChakraLink, Text, List, ListItem } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { BottomNavigation } from "../components/BottomNavigation";
import { Footer } from "../components/Footer";

const Index = () => (
  <Container height="100%">
    <Hero />
    <Main>
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
        <ListItem>
          <ChakraLink isExternal href="/center" flexGrow={1} mr={2}>
            Center Demo
            <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
      <Text>
        Merging the finite with the infinite. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed eu odio et dui cursus vestibulum eu id
        sapien. Praesent a erat efficitur dolor facilisis hendrerit. Suspendisse
        vulputate mi at magna pretium, vel tincidunt erat sodales. Sed ut
        dapibus nisl. Suspendisse tristique aliquam ullamcorper. Aenean rhoncus
        lacus tellus, a euismod justo tincidunt sit amet. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ut
        orci convallis, elementum ligula id, pulvinar neque. Curabitur vitae leo
        placerat, convallis odio eget, varius sem. Etiam massa leo, maximus et
        orci et, mattis varius lectus. Curabitur faucibus a enim sit amet
        tempus. Nullam et urna sit amet tellus pulvinar semper. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Mauris placerat, augue non sollicitudin dapibus, neque tellus
        lobortis felis, sed tempor metus diam non elit. Nam leo massa, facilisis
        at nunc et, tristique aliquam massa. Etiam vestibulum, libero vitae
        placerat venenatis, odio elit ultrices lorem, fringilla maximus nunc
        arcu sed lacus. Mauris lacus est, bibendum ut congue a, varius ac leo.
        Donec scelerisque ac odio et ullamcorper. Praesent vitae felis ac massa
        malesuada pellentesque. Quisque vestibulum neque nec risus dictum,
        tristique venenatis quam molestie. Suspendisse posuere dui vel metus
        iaculis porta. Mauris pharetra est ut rutrum iaculis. Proin rutrum
        laoreet leo at auctor. Nam fringilla erat at felis dictum bibendum.
        Mauris laoreet tincidunt est in suscipit. Vestibulum in leo varius,
        volutpat sem in, efficitur urna. Maecenas blandit ligula in ipsum
        sodales semper. Phasellus sed cursus enim, quis lobortis lacus. Nullam
        porttitor accumsan arcu, id accumsan est scelerisque at. Donec libero
        velit, mollis a finibus et, pharetra eget metus. Suspendisse et posuere
        purus. Donec consequat, dolor sed sodales consectetur, eros augue rutrum
        nisi, quis accumsan orci dui eget ligula. Quisque semper aliquam arcu,
        nec vehicula nunc fermentum in. Duis quis mi ut lorem convallis
        dignissim eget ut arcu. Etiam eget risus id risus suscipit vehicula.
        Donec sodales lorem ut nibh tempor commodo. Fusce vitae nunc augue.
        Proin lacus erat, convallis et fringilla in, posuere non arcu. Curabitur
        sed eros id odio finibus egestas. Proin consectetur nibh at nibh
        tincidunt tempus. Nullam at diam in diam vestibulum venenatis quis vel
        neque. Cras venenatis dolor erat. Vivamus volutpat, ligula non porta
        pulvinar, orci metus posuere ante, eu consequat nunc turpis at leo.
        Etiam vel leo orci. Integer ac nibh ornare, rhoncus velit a, hendrerit
        tortor. Nullam arcu ipsum, suscipit ultricies sapien nec, placerat
        lobortis felis. Mauris sed rutrum turpis. Etiam luctus sem vitae
        efficitur imperdiet. Curabitur congue fermentum nisi, eget finibus ex.
        Donec gravida ligula at rutrum ultricies. Nam semper velit ac magna
        iaculis, eu semper mi sodales.
      </Text>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Entroprise © 2021</Text>
    </Footer>
    <BottomNavigation />
  </Container>
);

export default Index;
