import * as React from "react";
import { Box } from "@chakra-ui/react";
import {
  HiOutlineGlobe,
  HiOutlineHome,
  HiOutlineBookOpen,
} from "react-icons/hi";
import { BiNetworkChart } from "react-icons/bi";

import { SidebarScrollStack } from "./SidebarScrollStack";
import { SidebarAccount } from "./SidebarAccount";
import { SidebarLink } from "./SidebarLink";
import DarkModeSwitch from "../CompDarkModeSwitch";

type SidebarNavProps = {};

export const SidebarNav: React.FC<SidebarNavProps> = () => {
  return (
    <Box
      as="nav"
      display="block"
      flex="1"
      width="var(--sidebar-width)"
      left="0"
      p="1rem"
      position="fixed"
    >
      <Box fontSize="sm" lineHeight="tall">
        <SidebarAccount />
        <SidebarScrollStack>
          <SidebarLink href="/" icon={<HiOutlineGlobe />}>
            Marketing
          </SidebarLink>
          <SidebarLink href="/app" icon={<HiOutlineHome />}>
            App Root
          </SidebarLink>
          <SidebarLink href="/app/stories" icon={<HiOutlineBookOpen />}>
            Stories
          </SidebarLink>
          <SidebarLink href="/app/map" icon={<BiNetworkChart />}>
            Node Map
          </SidebarLink>
          <DarkModeSwitch />
        </SidebarScrollStack>
      </Box>
    </Box>
  );
};
