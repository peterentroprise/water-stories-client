import { Box, Container } from "@chakra-ui/react";
import { DefaultNode, Graph } from "@visx/network";
import { ParentSize } from "@visx/responsive";

export type NetworkProps = {
  width: number;
  height: number;
};

interface CustomNode {
  x: number;
  y: number;
  color?: string;
}

interface CustomLink {
  source: CustomNode;
  target: CustomNode;
  dashed?: boolean;
}

const nodes: CustomNode[] = [
  { x: 50, y: 20 },
  { x: 200, y: 250 },
  { x: 300, y: 40, color: "#26deb0" },
];

const links: CustomLink[] = [
  { source: nodes[0], target: nodes[1] },
  { source: nodes[1], target: nodes[2] },
  { source: nodes[2], target: nodes[0], dashed: true },
];

const graph = {
  nodes,
  links,
};

const RenderGraph = ({ width, height }: NetworkProps) => {
  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill="purple" />
      <Graph<CustomLink, CustomNode>
        graph={graph}
        top={20}
        left={100}
        nodeComponent={({ node: { color } }) =>
          color ? <DefaultNode fill={color} /> : <DefaultNode />
        }
        linkComponent={({ link: { source, target, dashed } }) => (
          <line
            x1={source.x}
            y1={source.y}
            x2={target.x}
            y2={target.y}
            strokeWidth={2}
            stroke="#999"
            strokeOpacity={0.6}
            strokeDasharray={dashed ? "8,4" : undefined}
          />
        )}
      />
    </svg>
  );
};

export const GraphComponent = () => (
  <Box h="100vh" w="100%" bg="#F4F0F0">
    <Container h="100vh" p="0px" maxW="container.xl">
      <ParentSize>
        {(parent) => (
          <RenderGraph width={parent.width} height={parent.height} />
        )}
      </ParentSize>
    </Container>
  </Box>
);
