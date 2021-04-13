import { Box, Text, Image, Tag } from "@chakra-ui/react";

import Link from "../LinkComponent";

export const StoryCard = ({ story, children }) => {
  return (
    <Box height="100%" p={4} display={{ md: "flex" }}>
      <Box flexShrink={0}>
        <Image
          borderRadius="1rem"
          width={{ md: 40 }}
          src={story.video}
          alt="Moat"
        />
        {children}
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Tag>{story.tag}</Tag>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href={`/story/${story.id}`}
        >
          {story.title}
        </Link>
        <Text mt={2}>{story.description}</Text>
      </Box>
    </Box>
  );
};
