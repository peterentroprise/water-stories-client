import { Container } from "@chakra-ui/react";
import { DarkModeSwitch } from "../DarkModeSwitch";
import RootBackGround from "./RootBackground";
import { AppLayout } from "./AppLayout";

const LayoutComponent = ({ children }) => {
  return <AppLayout>{children}</AppLayout>;
};

export default LayoutComponent;
