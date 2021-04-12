import React from "react";
import "@fontsource/nanum-myeongjo/800.css";
import "@fontsource/mulish/400.css";

const MapNode = ({ label, level }) => {
  return (
    <div xmlns="http://www.w3.org/1999/xhtml">
      <div
        style={{
          color: "rgb(198 15 255)",
          fontFamily: "Mulish",
          fontSize: "30px",
        }}
      >
        {label} - {level}
      </div>
    </div>
  );
};

export default MapNode;
