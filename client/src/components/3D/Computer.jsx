import React, { Suspense, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useGLTF,
  useAnimations,
  useTexture,
} from "@react-three/drei";
import { Box3, Vector3 } from "three";

const Lighting = React.memo(() => (
  <>
    <ambientLight intensity={0.6} />
    <directionalLight position={[5, 5, 5]} intensity={0.7} castShadow />
    <pointLight position={[10, 10, 10]} intensity={1} />
    <spotLight
      position={[0, 10, 0]}
      angle={0.15}
      penumbra={1}
      intensity={2}
      castShadow
    />
  </>
));

const Model = ({ url, textureUrl }) => {
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, scene);
  const [diffuse, normal, roughness] = useTexture(textureUrl);

  const modelRef = useRef();

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]]?.play();
    }
  }, [actions]);

  // Apply textures only once
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.map = diffuse;
        child.material.normalMap = normal;
        child.material.roughnessMap = roughness;
        child.material.needsUpdate = true;
      }
    });
  }, [diffuse, normal, roughness, scene]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Apply any animation or movement here
    }
  });

  return <primitive ref={modelRef} object={scene} scale={[5, 5, 5]} />;
};

const Computer = () => {
  const modelPath =
    "https://raw.githubusercontent.com/GitHubNexon/3D-Models/main/microchip_-_prototype/scene.gltf";
  const texturePath = useMemo(() => [
    "https://raw.githubusercontent.com/GitHubNexon/3D-Models/main/microchip_-_prototype/textures/ground_baseColor.png",
    "https://raw.githubusercontent.com/GitHubNexon/3D-Models/main/microchip_-_prototype/textures/ground_emissive.jpeg",
    "https://raw.githubusercontent.com/GitHubNexon/3D-Models/main/microchip_-_prototype/textures/ground_metallicRoughness.png",
    "https://raw.githubusercontent.com/GitHubNexon/3D-Models/main/microchip_-_prototype/textures/ground_normal.png",
    "https://raw.githubusercontent.com/GitHubNexon/3D-Models/main/microchip_-_prototype/textures/material_baseColor.jpeg",
    "https://raw.githubusercontent.com/GitHubNexon/3D-Models/main/microchip_-_prototype/textures/material_emissive.jpeg",
    "https://raw.githubusercontent.com/GitHubNexon/3D-Models/main/microchip_-_prototype/textures/material_metallicRoughness.png",
    "https://raw.githubusercontent.com/GitHubNexon/3D-Models/main/microchip_-_prototype/textures/material_normal.png",
  ], []);

  return (
    <div className="relative w-full h-screen overflow-hidden cursor-grab m-auto">
      <Canvas
        camera={{ position: [-1, 10, -10], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Lighting />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={5}
          maxDistance={20}
        />
        <Environment preset="sunset" />
        <Suspense fallback={null}>
          <Model url={modelPath} textureUrl={texturePath} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Computer;
