import { Box, Text, Image, Link, Tag } from "@chakra-ui/react";

export const StoryCard = () => {
  return (
    <Box height="100%" p={4} display={{ md: "flex" }}>
      <Link
        mt={1}
        display="block"
        fontSize="lg"
        lineHeight="normal"
        fontWeight="semibold"
        href={`/`}
      >
        Home
      </Link>
    </Box>
  );
};
