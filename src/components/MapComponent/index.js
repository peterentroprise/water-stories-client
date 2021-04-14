import MapGraph from "./MapGraph";
import LayoutComponent from "../LayoutComponent";
import data from "./data.json";

const MapComponent = () => {
  return (
    <LayoutComponent>
      <MapGraph data={data} />
    </LayoutComponent>
  );
};

export default MapComponent;
