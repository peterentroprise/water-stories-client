import React from "react";
import { Tag } from "@chakra-ui/react";

const MapNode = ({ label, level }) => {
  return (
    <div xmlns="http://www.w3.org/1999/xhtml" className="map-node">
      <div>
        {label}
        {level}
      </div>
    </div>
  );
};

export default MapNode;
