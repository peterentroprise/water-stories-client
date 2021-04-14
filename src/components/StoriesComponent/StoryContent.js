import { Box, Flex, Text, AspectRatio, Image, Tag } from "@chakra-ui/react";

import Link from "../LinkComponent";

export const StoryContent = ({ story }) => {
  return (
    <Box width="100%">
      <AspectRatio ratio={16 / 9}>
        <Image
          borderTopLeftRadius="xl"
          borderTopRightRadius="xl"
          src={story.video}
          alt="Moat"
          objectFit="cover"
        />
      </AspectRatio>
      <Box p="1rem">
        <Box mb=".5rem">
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
          <Text maxW="100%" isTruncated>
            {story.description}
          </Text>
        </Box>

        <Flex alignItems="baseline">
          <Tag colorScheme="blackAlpha">{story.tag}</Tag>
        </Flex>
      </Box>
    </Box>
  );
};
