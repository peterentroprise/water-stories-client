import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../components/MapComponent"), {
  ssr: false,
});

const Map = () => {
  return (
    <>
      <MapComponent />
    </>
  );
};

export default Map;
