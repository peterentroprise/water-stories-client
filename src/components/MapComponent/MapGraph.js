import { useEffect, useState } from "react";
import { ForceGraph3D } from "react-force-graph";

import MapNode from "./MapNode";
import renderToSprite from "./renderToSprite";
import updateLinkPosition from "./updateLinkPosition";
import data from "./data";

const MapGraph = () => {
  const [graphData, setGraphData] = useState(null);

  useEffect(async () => {
    let nodesWithSprites = await Promise.all(
      data.nodes.map((node) =>
        renderToSprite(<MapNode label={node.name} level={node.level} />, {
          width: 120,
          height: 60,
        }).then((sprite) => ({ ...node, sprite }))
      )
    );
    setGraphData({ ...data, nodes: nodesWithSprites });
  }, []);

  if (graphData != null)
    return (
      <>
        <ForceGraph3D
          graphData={graphData}
          numDimensions={2}
          nodeThreeObject={({ sprite }) => sprite}
          linkWidth={1}
          linkPositionUpdate={updateLinkPosition}
        />
      </>
    );
  return <></>;
};

export default MapGraph;
