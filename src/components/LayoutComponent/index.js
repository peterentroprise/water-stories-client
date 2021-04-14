import { Container } from "@chakra-ui/react";
import { DarkModeSwitch } from "../DarkModeSwitch";
import RootBackGround from "./RootBackground";

const LayoutComponent = ({ children }) => {
  return (
    <RootBackGround>
      <DarkModeSwitch />
      <Container pt="5rem" pb="5rem">
        {children}
      </Container>
    </RootBackGround>
  );
};

export default LayoutComponent;
