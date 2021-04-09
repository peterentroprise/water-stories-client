import dynamic from "next/dynamic";
import Head from "next/head";

const MapComponent = dynamic(
  () => import("../components/MapComponent/MapComponent"),
  {
    ssr: false,
  }
);

const Map = () => {
  const customCss =
    "html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}body{font-family:sans-serif;margin:0;padding:0}";
  return (
    <>
      <Head>
        <title>Water Stories</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style id="styles" type="text/css">
          {customCss}
        </style>
      </Head>
      <MapComponent />
    </>
  );
};

export default Map;
