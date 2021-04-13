import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Link from "../LinkComponent";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

const StoryComponent = ({ id }) => {
  return (
    <>
      <motion.div className="single" initial="exit" animate="enter" exit="exit">
        <motion.img
          variants={imageVariants}
          src={`https://uploads-ssl.webflow.com/5e2f7d4ac8eec2386bad1415/5e5c2eb163723e27a2ab4a09_WaterCourse.jpg`}
          alt="The Barbican"
        />
        <motion.div className="back" variants={backVariants}>
          <>
            <Text>id:{id}</Text>
            <Link
              href="/stories"
              mt={1}
              display="block"
              fontSize="lg"
              lineHeight="normal"
              fontWeight="semibold"
            >
              Stories
            </Link>
          </>
        </motion.div>
      </motion.div>
    </>
  );
};

export default StoryComponent;
