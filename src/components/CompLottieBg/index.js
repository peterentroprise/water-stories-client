import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import { AspectRatio, Image } from "@chakra-ui/react";

import nature from "./nature.json";
// import night from "./night.json";
// import lake from "./lake.json";
// import construction from "./construction.json";

const LottieBg = () => {
  const options = {
    animationData: nature,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMinYMin slice",
    },
  };

  const style = {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default LottieBg;
