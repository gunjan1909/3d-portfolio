import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        textAlign: "center",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 15,
          color: "#63b8ff",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        Loading: {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
