import * as React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
  InputProps,
  useBoolean,
  useBreakpointValue,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { HiMenuAlt2, HiChevronRight, HiX } from "react-icons/hi";

import { SidebarNav } from "./SidebarNav";

type LayoutAppProps = {};

const LayoutApp: React.FC<LayoutAppProps> = ({ children }) => {
  const { isOpen, toggle } = useMobileMenuState();
  return (
    <Flex
      height="100vh"
      bgGradient={mode(
        "linear(to-tr, teal.200, blue.500)",
        "linear(to-tr, teal.200, blue.500)"
      )}
      overflow="hidden"
      sx={{ "--sidebar-width": "256px" }}
    >
      <SidebarNav />
      <Box
        flex="1"
        p={{ md: "1rem" }}
        marginStart={{ md: "var(--sidebar-width)" }}
        position="relative"
        left={isOpen ? "var(--sidebar-width)" : "0"}
        transition="left 0.2s"
      >
        <Box
          maxW="2560px"
          bg={mode("white", "gray.700")}
          height="100%"
          pb="1rem"
          rounded={{ md: "lg" }}
        >
          <Flex direction="column" height="full">
            <Flex
              w="full"
              py="1rem"
              justify="space-between"
              align="center"
              px="1rem"
            >
              <Flex align="center" minH=".5rem" pl=".5rem">
                <MobileMenuButton onClick={toggle} isOpen={isOpen} />
                <NavBreadcrumb />
              </Flex>
              <SearchInput />
            </Flex>
            <Flex
              direction="column"
              flex="1"
              overflow="auto"
              px="1rem"
              pt="1rem"
            >
              <Heading size="md" fontWeight="extrabold" mb="1rem">
                Water Stories
              </Heading>
              <Box maxW="300px" flex="1">
                {children}
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

const MobileMenuButton = (props: { onClick: () => void; isOpen: boolean }) => {
  const { onClick, isOpen } = props;
  return (
    <Box
      display={{ md: "none" }}
      ml="-.5rem"
      mr=".5rem"
      as="button"
      type="button"
      rounded="md"
      p=".1rem"
      fontSize="xl"
      onClick={onClick}
    >
      <Box srOnly>{isOpen ? "Close Menu" : "Open Menu"}</Box>
      {isOpen ? <HiX /> : <HiMenuAlt2 />}
    </Box>
  );
};

const NavBreadcrumb = (props: BreadcrumbProps) => (
  <Breadcrumb
    fontSize="sm"
    {...props}
    separator={
      <Box as={HiChevronRight} fontSize="md" top=".1rem" pos="relative" />
    }
  >
    <BreadcrumbItem color="inherit">
      <BreadcrumbLink>Stories</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem color="inherit" isCurrentPage>
      <BreadcrumbLink>Take Me There</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);

const SearchInput = (props: InputProps & { rootProps?: InputGroupProps }) => {
  const { rootProps, ...rest } = props;
  return (
    <InputGroup
      maxW="2xs"
      size="sm"
      variant="filled"
      display={{ base: "none", lg: "block" }}
      {...rootProps}
    >
      <InputLeftElement pointerEvents="none">
        <BsSearch />
      </InputLeftElement>
      <Input {...rest} placeholder="Search" rounded="md" />
    </InputGroup>
  );
};

const useMobileMenuState = () => {
  const [isOpen, actions] = useBoolean();
  const isMobile = useBreakpointValue({ base: true, lg: false });
  React.useEffect(() => {
    if (isMobile == false) {
      actions.off();
    }
  }, [isMobile, actions]);
  return { isOpen, ...actions };
};

export default LayoutApp;
