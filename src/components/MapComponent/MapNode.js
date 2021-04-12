import React from "react";

const MapNode = ({ label, level }) => {
  return (
    <div xmlns="http://www.w3.org/1999/xhtml">
      <div
        style={{
          // color: "rgb(198 15 255)",
          fontFamily: "Mulish",
          fontSize: "14px",
          backgroundColor: "rgb(198 15 255)",
          borderRadius: "8px",
          paddingLeft: "8px",
          paddingRight: "8px",
          textAlign: "center",
        }}
      >
        {label} - {level}
      </div>
    </div>
  );
};

export default MapNode;
