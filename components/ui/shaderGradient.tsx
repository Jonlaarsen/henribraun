import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function ShaderGradientComponent() {
  return (
    <ShaderGradientCanvas
      style={{ position: "absolute", inset: 0 }}
      pixelDensity={1.5}
      fov={45}
      className="pointer-events-none"
    >
      <ShaderGradient
        animate="on"
        brightness={1.2}
        cAzimuthAngle={180}
        cDistance={3.6}
        cPolarAngle={90}
        cameraZoom={1}
        color1="#ff5005"
        color2="#db6767"
        color3="#f68a6c"
        envPreset="city"
        grain="off"
        lightType="3d"
        positionX={-1.4}
        positionY={0}
        positionZ={0}
        range="disabled"
        rangeEnd={30.5}
        rangeStart={0}
        reflection={0.1}
        rotationX={0}
        rotationY={10}
        rotationZ={10}
        shader="defaults"
        type="plane"
        uAmplitude={1}
        uDensity={2.4}
        uFrequency={2.5}
        uSpeed={0.2}
        uStrength={3.6}
        uTime={0}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
}
