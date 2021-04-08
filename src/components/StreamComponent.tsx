import { useState } from "react";
import { Box, Container } from "@chakra-ui/react";
import { ParentSize } from "@visx/responsive";
import { Stack } from "@visx/shape";
import { PatternCircles, PatternWaves } from "@visx/pattern";
import { scaleLinear, scaleOrdinal } from "@visx/scale";
import { transpose } from "d3-array";
import { animated, useSpring } from "react-spring";
import { getSeededRandom } from "@visx/mock-data";

const random = getSeededRandom(0.65);

const getPoints = (array: number[], pointCount: number) => {
  const x = 1 / (0.1 + random());
  const y = 2 * random() - 0.5;
  const z = 10 / (0.1 + random());
  for (let i = 0; i < pointCount; i += 1) {
    const w = (i / pointCount - y) * z;
    array[i] += x * Math.exp(-w * w);
  }
};

const generateData = (pointCount: number, bumpCount: number): number[] => {
  const arr = [];
  let i: number;
  for (i = 0; i < pointCount; i += 1) arr[i] = 0;
  for (i = 0; i < bumpCount; i += 1) getPoints(arr, pointCount);
  return arr;
};

const useForceUpdate = () => {
  const [, setValue] = useState<number>(0);
  return () => setValue((value) => value + 1); // update state to force render
};

// constants
const NUM_LAYERS = 20;
const SAMPLES_PER_LAYER = 200;
const BUMPS_PER_LAYER = 10;
export const BACKGROUND = "#ffdede";

// utils
const range = (n: number) => Array.from(new Array(n), (_, i) => i);

const keys = range(NUM_LAYERS);

// scales
const xScale = scaleLinear<number>({
  domain: [0, SAMPLES_PER_LAYER - 1],
});
const yScale = scaleLinear<number>({
  domain: [-30, 50],
});
const colorScale = scaleOrdinal<number, string>({
  domain: keys,
  range: [
    "#ffc409",
    "#f14702",
    "#262d97",
    "white",
    "#036ecd",
    "#9ecadd",
    "#51666e",
  ],
});
const patternScale = scaleOrdinal<number, string>({
  domain: keys,
  range: [
    "mustard",
    "cherry",
    "navy",
    "circles",
    "circles",
    "circles",
    "circles",
  ],
});

// accessors
type Datum = number[];
const getY0 = (d: Datum) => yScale(d[0]) ?? 0;
const getY1 = (d: Datum) => yScale(d[1]) ?? 0;

export type StreamGraphProps = {
  width: number;
  height: number;
  animate?: boolean;
};

export type FluidValue = {};

const RenderGraph = ({ width, height, animate = true }: StreamGraphProps) => {
  const forceUpdate = useForceUpdate();
  const handlePress = () => forceUpdate();

  if (width < 10) return null;

  xScale.range([0, width]);
  yScale.range([height, 0]);

  // generate layers in render to update on touch
  const layers = transpose<number>(
    keys.map(() => generateData(SAMPLES_PER_LAYER, BUMPS_PER_LAYER))
  );

  return (
    <svg width={width} height={height}>
      <PatternCircles
        id="mustard"
        height={40}
        width={40}
        radius={5}
        fill="#036ecf"
        complement
      />
      <PatternWaves
        id="cherry"
        height={12}
        width={12}
        fill="transparent"
        stroke="#232493"
        strokeWidth={1}
      />
      <PatternCircles
        id="navy"
        height={60}
        width={60}
        radius={10}
        fill="white"
        complement
      />
      <PatternCircles
        complement
        id="circles"
        height={60}
        width={60}
        radius={10}
        fill="transparent"
      />

      <g onClick={handlePress} onTouchStart={handlePress}>
        <rect x={0} y={0} width={width} height={height} fill={BACKGROUND} />
        <Stack<number[], number>
          data={layers}
          keys={keys}
          offset="wiggle"
          color={colorScale}
          x={(_, i) => xScale(i) ?? 0}
          y0={getY0}
          y1={getY1}
        >
          {({ stacks, path }) =>
            stacks.map((stack) => {
              // Alternatively use renderprops <Spring to={{ d }}>{tweened => ...}</Spring>
              const tweened = animate
                ? useSpring({ d: path(stack) })
                : { d: path(stack) };
              const color = colorScale(stack.key);
              const pattern = patternScale(stack.key);
              return (
                <g key={`series-${stack.key}`}>
                  <animated.path d={tweened.d || ""} fill={color} />
                  <animated.path
                    d={tweened.d || ""}
                    fill={`url(#${pattern})`}
                  />
                </g>
              );
            })
          }
        </Stack>
      </g>
    </svg>
  );
};

export const StreamComponent = () => (
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
