import dynamic from "next/dynamic";

const ForceComponent = dynamic(() => import("../components/ForceComponent"), {
  ssr: false,
});

const Force = () => {
  return <ForceComponent />;
};

export default Force;
