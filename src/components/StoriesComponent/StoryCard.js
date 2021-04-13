import { Box, Text, Image, Link } from "@chakra-ui/react";

export const StoryCard = () => {
  return (
    <Box height="100%" p={4} display={{ md: "flex" }}>
      <Box flexShrink={0}>
        <Image
          borderRadius="1rem"
          width={{ md: 40 }}
          src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_483601959_2000132420009280395_142366.jpg"
          alt="Moat"
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text fontWeight="bold" fontSize="sm" letterSpacing="wide">
          Loot Castle
        </Text>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
        >
          Moats & Hoes
        </Link>
        <Text mt={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in est
          consectetur, egestas massa vel, ultricies sem. Nam in lorem felis.
          Donec vitae tellus pellentesque, suscipit magna vitae, posuere dui.
          Integer sodales, mauris nec congue cursus, enim dolor molestie turpis,
          nec hendrerit libero leo eleifend nibh. Proin dapibus, enim a aliquet
          pellentesque, lectus odio sodales lectus, vitae blandit ligula arcu at
          odio. Maecenas ut sagittis augue. Aenean cursus ex sit amet augue
          rutrum, ac fringilla ante vulputate. Curabitur sodales non ex id
          gravida. Donec vitae nulla tempus, interdum lectus vitae, sollicitudin
          sem. Mauris sed placerat libero.
        </Text>
      </Box>
    </Box>
  );
};
